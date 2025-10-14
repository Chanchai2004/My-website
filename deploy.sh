#!/bin/bash

echo "🚀 Starting deployment..."

# Check for help
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    echo "🚀 Website Deployment Script"
    echo ""
    echo "Usage:"
    echo "  ./deploy.sh              - Normal deployment (update existing)"
    echo "  ./deploy.sh --clean-all  - Clean everything and deploy fresh"
    echo "  ./deploy.sh --help       - Show this help"
    echo ""
    echo "Options:"
    echo "  --clean-all  Remove all Docker containers, images, volumes, and networks"
    echo "  --help       Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./deploy.sh              # Normal update"
    echo "  ./deploy.sh --clean-all  # Fresh start (recommended for troubleshooting)"
    exit 0
fi

# Check if user wants to clean everything
if [ "$1" = "--clean-all" ]; then
    echo "🧹 CLEANING ALL DOCKER RESOURCES..."
    
    # Stop all containers
    echo "📦 Stopping all containers..."
    docker stop $(docker ps -aq) 2>/dev/null || true
    
    # Remove all containers
    echo "🗑️ Removing all containers..."
    docker rm $(docker ps -aq) 2>/dev/null || true
    
    # Remove all images
    echo "🖼️ Removing all images..."
    docker rmi $(docker images -q) 2>/dev/null || true
    
    # Remove all volumes
    echo "💾 Removing all volumes..."
    docker volume rm $(docker volume ls -q) 2>/dev/null || true
    
    # Remove all networks
    echo "🌐 Removing all networks..."
    docker network rm $(docker network ls -q) 2>/dev/null || true
    
    # Clean up system
    echo "🧽 Cleaning up Docker system..."
    docker system prune -af --volumes
    
    echo "✅ All Docker resources cleaned!"
    echo "🔄 Proceeding with fresh deployment..."
fi

# Stop existing containers
echo "📦 Stopping existing containers..."
docker-compose -f docker-compose-production.yml down

# Remove old nginx container if exists
echo "🧹 Cleaning up old nginx container..."
docker rm -f my-website-nginx 2>/dev/null || true

# Pull latest images
echo "⬇️ Pulling latest images..."
docker-compose -f docker-compose-production.yml pull

# Start services
echo "🔄 Starting services..."
docker-compose -f docker-compose-production.yml up -d

# Wait a moment for services to start
echo "⏳ Waiting for services to start..."
sleep 5

# Check status
echo "📊 Checking service status..."
docker-compose -f docker-compose-production.yml ps

# Check logs if nginx failed
echo "📋 Checking nginx logs..."
docker logs my-website-nginx 2>&1 | tail -10

# Show all service logs
echo ""
echo "📋 All service logs:"
echo "==================="
echo "🔧 Backend logs:"
docker logs my-website-backend 2>&1 | tail -20
echo ""
echo "🌐 Frontend logs:"
docker logs my-website-frontend 2>&1 | tail -20
echo ""
echo "⚙️ Nginx logs:"
docker logs my-website-nginx 2>&1 | tail -20

echo "✅ Deployment completed!"
echo "🌐 Website should be available at: http://chanchailertsri.online"
echo "🔧 Backend API: http://chanchailertsri.online/api"
echo "📊 Frontend: http://chanchailertsri.online"
echo ""
echo "📋 Usage:"
echo "  ./deploy.sh              - Normal deployment"
echo "  ./deploy.sh --clean-all  - Clean everything and deploy fresh"
echo "  ./deploy.sh --help       - Show this help"
echo ""
echo "📋 Logs commands:"
echo "  ./logs.sh backend 100    - Show backend logs (last 100 lines)"
echo "  ./logs.sh frontend       - Show frontend logs (last 50 lines)"
echo "  ./logs.sh nginx          - Show nginx logs (last 50 lines)"
echo "  ./logs.sh all            - Show all services logs"
echo "  ./follow-logs.sh backend - Follow backend logs in real-time"
