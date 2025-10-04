@echo off
REM 🐳 Docker Build and Push Script for chanchailertsri.online
REM This script builds and pushes both frontend and backend to Docker Hub

echo 🚀 Building and Pushing Docker Images
echo =====================================

REM Set your Docker Hub username (change this to your username)
set DOCKER_USERNAME=chanchai2004
set PROJECT_NAME=my-website
set VERSION=latest

echo ✅ Docker Hub username configured: chanchai2004
echo Current username: %DOCKER_USERNAME%
echo.

REM Check if Docker is running
docker version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not running. Please start Docker Desktop first.
    pause
    exit /b 1
)

echo ✅ Docker is running
echo.

REM Login to Docker Hub
echo 🔐 Logging in to Docker Hub...
docker login
if %errorlevel% neq 0 (
    echo ❌ Failed to login to Docker Hub
    pause
    exit /b 1
)

echo.
echo 🏗️ Building Backend Image...
docker build -t %DOCKER_USERNAME%/%PROJECT_NAME%-backend:%VERSION% ./backend
if %errorlevel% neq 0 (
    echo ❌ Failed to build backend image
    pause
    exit /b 1
)

echo.
echo 🏗️ Building Frontend Image...
docker build -t %DOCKER_USERNAME%/%PROJECT_NAME%-frontend:%VERSION% ./frontend
if %errorlevel% neq 0 (
    echo ❌ Failed to build frontend image
    pause
    exit /b 1
)

echo.
echo 📤 Pushing Backend Image to Docker Hub...
docker push %DOCKER_USERNAME%/%PROJECT_NAME%-backend:%VERSION%
if %errorlevel% neq 0 (
    echo ❌ Failed to push backend image
    pause
    exit /b 1
)

echo.
echo 📤 Pushing Frontend Image to Docker Hub...
docker push %DOCKER_USERNAME%/%PROJECT_NAME%-frontend:%VERSION%
if %errorlevel% neq 0 (
    echo ❌ Failed to push frontend image
    pause
    exit /b 1
)

echo.
echo ✅ All images built and pushed successfully!
echo.
echo 📋 Your Docker Hub images:
echo - %DOCKER_USERNAME%/%PROJECT_NAME%-backend:%VERSION%
echo - %DOCKER_USERNAME%/%PROJECT_NAME%-frontend:%VERSION%
echo.
echo 🚀 Next steps:
echo 1. Update docker-compose.yml to use your Docker Hub images
echo 2. Deploy to your server
echo.
pause
