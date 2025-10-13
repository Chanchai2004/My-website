Write-Host "Starting Go Backend with Auto-Reload..." -ForegroundColor Green
Write-Host ""
Write-Host "This will watch for file changes and restart the server automatically." -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow
Write-Host ""

# Check if air is installed
try {
    $null = Get-Command air -ErrorAction Stop
    Write-Host "Air is already installed." -ForegroundColor Green
} catch {
    Write-Host "Air is not installed. Installing..." -ForegroundColor Yellow
    go install github.com/air-verse/air@latest
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install air. Please install manually." -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
}

# Start air
Write-Host "Starting Air..." -ForegroundColor Green
air
