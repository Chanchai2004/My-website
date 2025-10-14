#!/bin/bash

echo "🧹 DOCKER CLEANUP SCRIPT"
echo "⚠️  WARNING: This will remove ALL Docker resources!"
echo ""

# Ask for confirmation
read -p "Are you sure you want to clean everything? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Operation cancelled."
    exit 1
fi

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
echo "🔄 Server is now clean and ready for fresh deployment."
echo ""
echo "Next steps:"
echo "  1. Run: ./deploy.sh --clean-all"
echo "  2. Or run: ./deploy.sh (for normal deployment)"
