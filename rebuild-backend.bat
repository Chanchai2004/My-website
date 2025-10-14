@echo off
echo 🔄 Rebuilding Backend with CV file...
echo =====================================

echo 🔧 Building Backend Image...
docker build -t chanchai2004/my-website-backend:latest ./backend

if %ERRORLEVEL% neq 0 (
    echo ❌ Backend build failed!
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

echo ✅ Backend rebuilt and pushed successfully!
echo 📋 Next steps:
echo 1. Run: ./deploy.sh --clean-all
echo 2. Or run: ./deploy.sh
echo.
pause
