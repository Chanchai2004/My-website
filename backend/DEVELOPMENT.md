# Development Guide

## Auto-Reload Development Server

### วิธีที่ 1: ใช้ Air (แนะนำ)

Air จะเฝ้าดูการเปลี่ยนแปลงไฟล์และ restart server อัตโนมัติ

#### การติดตั้ง Air:
```bash
go install github.com/air-verse/air@latest
```

#### การใช้งาน:
```bash
# วิธีที่ 1: รันโดยตรง
air

# วิธีที่ 2: ใช้ batch file (Windows)
start-dev.bat

# วิธีที่ 3: ใช้ PowerShell script
.\start-dev.ps1
```

### วิธีที่ 2: ใช้ Go Run (Manual)

```bash
# รัน server ปกติ (ต้อง restart เองเมื่อแก้ไขไฟล์)
go run main.go

# รันใน test mode
go run main.go -test
```

### วิธีที่ 3: ใช้ Nodemon (ถ้ามี Node.js)

```bash
# ติดตั้ง nodemon
npm install -g nodemon

# รันด้วย nodemon
nodemon --exec "go run main.go" --ext go
```

## การตั้งค่า Air

ไฟล์ `.air.toml` จะกำหนดการตั้งค่าต่างๆ:

- **include_ext**: ไฟล์ที่ต้องเฝ้าดู (go, html, tpl)
- **exclude_dir**: โฟลเดอร์ที่ไม่ต้องเฝ้าดู (tmp, vendor, testdata)
- **delay**: หน่วงเวลาก่อน restart (มิลลิวินาที)
- **cmd**: คำสั่งที่ใช้ build

## ไฟล์ที่ Air จะเฝ้าดู:

✅ **เฝ้าดู:**
- `*.go` files
- `*.html` files
- `*.tpl` files
- `*.tmpl` files

❌ **ไม่เฝ้าดู:**
- `tmp/` directory
- `vendor/` directory
- `testdata/` directory
- `*_test.go` files

## การใช้งาน:

1. **เปิด Terminal ในโฟลเดอร์ backend**
2. **รันคำสั่ง:**
   ```bash
   air
   ```
3. **แก้ไขไฟล์ Go ใดๆ**
4. **Air จะ restart server อัตโนมัติ**

## ข้อดีของ Air:

- ⚡ **Fast restart** - restart เร็วมาก
- 🔍 **Smart watching** - เฝ้าดูเฉพาะไฟล์ที่จำเป็น
- 🎨 **Colorful output** - แสดงผลสีสันสวยงาม
- ⚙️ **Configurable** - ตั้งค่าได้ตามต้องการ
- 🛡️ **Safe** - ไม่ restart เมื่อมี error

## Troubleshooting:

### ถ้า Air ไม่ทำงาน:
```bash
# ลบ cache
rm -rf tmp/

# รันใหม่
air
```

### ถ้า Port ถูกใช้งาน:
```bash
# เปลี่ยน port ใน main.go
const PORT = "8001"
```

### ถ้า Air ติดตั้งไม่ได้:
```bash
# ใช้วิธี manual
go run main.go
```
