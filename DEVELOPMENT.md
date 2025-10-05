# Development Setup Guide

## การตั้งค่า Development Environment

### Backend (Go + Gin)
- **Port**: 8000
- **URL**: http://localhost:8000
- **Database**: SQLite (GOTNAJA.db)

#### วิธีการรัน Backend:
```bash
cd backend
go run main.go
```

หรือใช้ PowerShell script:
```powershell
cd backend
.\start-dev.ps1
```

### Frontend (Next.js)
- **Port**: 3000 (default Next.js)
- **API URL**: http://localhost:8000 (สำหรับ development)

#### วิธีการรัน Frontend:
```bash
cd frontend
npm run dev
```

## การตั้งค่าที่เปลี่ยนแปลง:

### Backend:
- ✅ PORT = "8000" ใน `main.go`
- ✅ สร้างไฟล์ `.env` สำหรับ development environment

### Frontend:
- ✅ อัปเดต `next.config.ts` ให้ใช้ localhost:8000 ใน development mode
- ✅ อัปเดต `api.ts` ให้ใช้ environment variable

## การใช้งาน:

1. รัน Backend ก่อน:
   ```bash
   cd backend
   go run main.go
   ```

2. รัน Frontend ใน terminal อื่น:
   ```bash
   cd frontend
   npm run dev
   ```

3. เข้าถึงแอปพลิเคชัน:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

## Environment Variables:

### Backend (.env):
- `GIN_MODE=debug` - สำหรับ development mode
- `JWT_SECRET_KEY` - สำหรับ JWT authentication
- `DB_NAME=GOTNAJA.db` - ชื่อฐานข้อมูล

### Frontend:
- `NEXT_PUBLIC_API_URL` - จะถูกตั้งเป็น `http://localhost:8000` อัตโนมัติใน development mode

