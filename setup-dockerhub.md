# 🐳 รายงานการ Deploy ด้วย Docker Hub

## 📋 **ภาพรวม Architecture การ Deploy**

### **เทคโนโลยีที่ใช้:**
- **Frontend**: Next.js 15.5.4 (React Framework)
- **Backend**: Go 1.24 (Gin Gonic Framework)
- **Database**: SQLite (รองรับ CGO)
- **Reverse Proxy**: Nginx
- **Containerization**: Docker & Docker Compose
- **Cloud Registry**: Docker Hub
- **SSL**: Let's Encrypt (Certbot)
- **Domain**: chanchailertsri.online

### **ขั้นตอนการ Deploy:**
```
พัฒนาในเครื่อง → สร้าง Docker Image → อัปโหลด Docker Hub → ดาวน์โหลดใน Server → Nginx → HTTPS
```

---

## 🚀 **ขั้นตอนการ Deploy แบบละเอียด**

### **ขั้นตอนที่ 1: การตั้งค่า Development ในเครื่อง**
```bash
# Frontend (Next.js)
cd frontend
npm install
npm run dev

# Backend (Go)
cd backend
go mod tidy
air  # รีสตาร์ทอัตโนมัติเมื่อแก้ไขไฟล์
```

### **ขั้นตอนที่ 2: สร้างและอัปโหลด Docker Image**
```batch
# รันในเครื่อง Windows
build-and-push.bat
```

**สคริปต์นี้ทำอะไร:**
- สร้าง `chanchai2004/my-website-backend:latest` จาก `backend/Dockerfile`
- สร้าง `chanchai2004/my-website-frontend:latest` จาก `frontend/Dockerfile`
- อัปโหลดทั้งสอง images ไป Docker Hub
- ใช้ multi-stage builds เพื่อเพิ่มประสิทธิภาพ

### **ขั้นตอนที่ 3: Deploy ไป Server**
```bash
# บน DigitalOcean server (128.199.157.92)
./deploy-from-dockerhub.sh
```

**สคริปต์นี้ทำอะไร:**
- ติดตั้ง Docker & Docker Compose
- ดาวน์โหลด images จาก Docker Hub
- ตั้งค่า Nginx reverse proxy
- ขอ SSL certificates ผ่าน Certbot
- เริ่มต้น services ทั้งหมดด้วย `docker-compose-production.yml`

### **ขั้นตอนที่ 4: การตั้งค่า Nginx**
**ไฟล์**: `nginx/nginx.conf`
- **HTTP → HTTPS Redirect**: Port 80 → 443
- **API Routing**: `/api/*` → Backend (Port 8000)
- **Auth Routing**: `/auth/*` → Backend (Port 8000)
- **Static Files**: เส้นทางอื่นๆ → Frontend (Port 3000)
- **SSL Termination**: Let's Encrypt certificates
- **Rate Limiting**: ป้องกัน API

### **ขั้นตอนที่ 5: การจัดการ Docker Compose**
**ไฟล์**: `docker-compose-production.yml`
```yaml
services:
  backend:    # Go API server (Port 8000)
  frontend:   # Next.js app (Port 3000)
  nginx:      # Reverse proxy (Ports 80, 443)
```

---

## 📁 **ไฟล์สำคัญและหน้าที่**

### **ไฟล์ Docker:**
- `backend/Dockerfile` - สร้าง container สำหรับ Go backend
- `frontend/Dockerfile` - สร้าง container สำหรับ Next.js frontend
- `docker-compose.yml` - สภาพแวดล้อม development
- `docker-compose-production.yml` - สภาพแวดล้อม production

### **สคริปต์ Deploy:**
- `build-and-push.bat` - สร้างและอัปโหลดไป Docker Hub (Windows)
- `deploy-from-dockerhub.sh` - Deploy จาก Docker Hub (Linux)

### **ไฟล์ Configuration:**
- `nginx/nginx.conf` - การตั้งค่า Nginx reverse proxy
- `env.production` - ตัวแปรสภาพแวดล้อม production

### **ไฟล์ Application:**
- `frontend/src/middleware.ts` - Next.js authentication middleware
- `backend/main.go` - จุดเริ่มต้น Go server
- `backend/config/db.go` - การตั้งค่าฐานข้อมูล

---

## 🔧 **รายละเอียดการตั้งค่า**

### **การตั้งค่า Docker Hub:**
```bash
# Username: chanchai2004
# Images:
# - chanchai2004/my-website-backend:latest
# - chanchai2004/my-website-frontend:latest
```

### **Domain และ SSL:**
```bash
# Domain: chanchailertsri.online
# SSL: Let's Encrypt (ต่ออายุอัตโนมัติ)
# Certificates: /etc/letsencrypt/live/chanchailertsri.online/
```

### **การแมป Port:**
```yaml
# External → Internal
80   → Nginx (HTTP redirect)
443  → Nginx (HTTPS)
3000 → Frontend (เข้าถึงโดยตรง)
8000 → Backend (เข้าถึงโดยตรง)
```

---

## ✅ **การตรวจสอบการ Deploy**

### **ทดสอบ Endpoints:**
```bash
# Website
curl -I https://chanchailertsri.online

# API
curl -I https://chanchailertsri.online/api/

# Login
curl -X POST https://chanchailertsri.online/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@gmail.com","password":"123456"}'
```

### **สถานะ Container:**
```bash
docker-compose -f docker-compose-production.yml ps
```

---

## 🎯 **ประโยชน์ของ Architecture นี้**

✅ **ขยายได้ง่าย**: ขยาย services แต่ละตัวได้ง่าย  
✅ **ความสอดคล้อง**: ใช้ images เดียวกันในทุกสภาพแวดล้อม  
✅ **ความปลอดภัย**: HTTPS พร้อมต่ออายุ SSL อัตโนมัติ  
✅ **ประสิทธิภาพ**: Nginx reverse proxy พร้อม caching  
✅ **บำรุงรักษา**: microservices แบบ containerized  
✅ **ความน่าเชื่อถือ**: รีสตาร์ทอัตโนมัติเมื่อเกิดข้อผิดพลาด  
✅ **การติดตาม**: logging แบบรวมศูนย์  

---

## 🔄 **กระบวนการอัปเดต**

### **การอัปเดต Application (Redeploy):**
1. แก้ไขโค้ดในเครื่อง
2. รัน `build-and-push.bat` เพื่อสร้างและอัปโหลด images ใหม่
3. บน server: `docker-compose -f docker-compose-production.yml pull`
4. บน server: `docker-compose -f docker-compose-production.yml up -d`

### **การอัปเดต Configuration:**
1. แก้ไข `nginx/nginx.conf` หรือ `docker-compose-production.yml`
2. อัปโหลดไป server
3. รีสตาร์ท services ที่เกี่ยวข้อง

---

## 🗑️ **การลบ Images และ Redeploy**

### **การลบ Images ที่ไม่ได้ใช้:**
```bash
# หยุด containers ทั้งหมด
docker-compose -f docker-compose-production.yml down

# ลบ images ที่ไม่ได้ใช้ทั้งหมด
docker image prune -a -f

# ลบ images เฉพาะ (ถ้าต้องการ)
docker rmi chanchai2004/my-website-frontend:latest
docker rmi chanchai2004/my-website-backend:latest

# ตรวจสอบ images ที่เหลือ
docker images
```

### **การ Redeploy แบบสมบูรณ์:**
```bash
# 1. หยุด services ทั้งหมด
docker-compose -f docker-compose-production.yml down

# 2. ลบ images เก่าทิ้ง
docker rmi chanchai2004/my-website-frontend:latest
docker rmi chanchai2004/my-website-backend:latest

# 3. ลบ images ที่ไม่ได้ใช้
docker image prune -a -f

# 4. ดาวน์โหลด images ใหม่จาก Docker Hub
docker-compose -f docker-compose-production.yml pull

# 5. เริ่มต้น services ใหม่
docker-compose -f docker-compose-production.yml up -d

# 6. ตรวจสอบสถานะ
docker-compose -f docker-compose-production.yml ps
```

### **การลบ Images ทั้งหมด (ถ้าต้องการ):**
```bash
# หยุด containers ทั้งหมด
docker-compose -f docker-compose-production.yml down

# ลบ images ทั้งหมด
docker rmi $(docker images -q)

# หรือลบทีละตัว
docker rmi nginx:alpine
docker rmi chanchai2004/my-website-frontend:latest
docker rmi chanchai2004/my-website-backend:latest
```

### **การลบ Containers ที่ไม่ได้ใช้:**
```bash
# ลบ containers ที่หยุดแล้ว
docker container prune -f

# ลบ volumes ที่ไม่ได้ใช้
docker volume prune -f

# ลบ networks ที่ไม่ได้ใช้
docker network prune -f

# ลบทุกอย่างที่ไม่ได้ใช้ (ระวัง!)
docker system prune -a -f
```

### **การตรวจสอบพื้นที่ที่ใช้:**
```bash
# ดูขนาดของ images
docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"

# ดูพื้นที่ที่ใช้ทั้งหมด
docker system df

# ดูรายละเอียดพื้นที่ที่ใช้
docker system df -v
```

---

## 🚨 **การแก้ไขปัญหา**

### **ปัญหาที่พบบ่อย:**
- **SSL Certificate Error**: ตรวจสอบไฟล์ certificate ใน `/etc/nginx/ssl/`
- **Redirect Loop**: ตรวจสอบ logic ใน `frontend/src/middleware.ts`
- **Database Connection**: ตรวจสอบว่าเปิด CGO ใน backend Dockerfile
- **Port Conflicts**: หยุด system services ที่ใช้ ports 80/443

### **การดู Logs:**
```bash
# ดู logs ทั้งหมด
docker-compose -f docker-compose-production.yml logs

# ดู logs ของ service เฉพาะ
docker-compose -f docker-compose-production.yml logs nginx
docker-compose -f docker-compose-production.yml logs backend
docker-compose -f docker-compose-production.yml logs frontend
```
