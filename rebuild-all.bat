@echo off
echo 🔄 Rebuilding All Images...
echo ===========================

echo 🔧 Building Backend Image...
docker build -t chanchai2004/my-website-backend:latest ./backend

if %ERRORLEVEL% neq 0 (
    echo ❌ Backend build failed!
    pause
    exit /b 1
)

echo 🔧 Building Frontend Image...
docker build -t chanchai2004/my-website-frontend:latest ./frontend

if %ERRORLEVEL% neq 0 (
    echo ❌ Frontend build failed!
    pause
    exit /b 1
)

echo 🚀 Pushing Backend Image to Docker Hub...
docker push chanchai2004/my-website-backend:latest

if %ERRORLEVEL% neq 0 (
    echo ❌ Backend push failed!
    pause
    exit /b 1
)

echo 🚀 Pushing Frontend Image to Docker Hub...
docker push chanchai2004/my-website-frontend:latest

if %ERRORLEVEL% neq 0 (
    echo ❌ Frontend push failed!
    pause
    exit /b 1
)

echo ✅ All images rebuilt and pushed successfully!
echo 📋 Next steps:
echo 1. Run: ./deploy.sh --clean-all
echo 2. Or run: ./deploy.sh
echo.
pause
