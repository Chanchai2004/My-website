@echo off
echo Starting Go Backend with Auto-Reload...
echo.
echo This will watch for file changes and restart the server automatically.
echo Press Ctrl+C to stop.
echo.

REM Check if air is installed
where air >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Air is not installed. Installing...
    go install github.com/air-verse/air@latest
    if %ERRORLEVEL% NEQ 0 (
        echo Failed to install air. Please install manually.
        pause
        exit /b 1
    )
)

REM Start air
air

pause
