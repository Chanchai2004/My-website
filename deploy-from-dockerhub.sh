#!/bin/bash

# 🚀 Deploy from Docker Hub Script
# This script deploys the application using pre-built images from Docker Hub

set -e

# Configuration
DOCKER_USERNAME="chanchai2004"
PROJECT_NAME="my-website"
VERSION="latest"
DOMAIN="chanchailertsri.online"
EMAIL="admin@chanchailertsri.online"

echo "🚀 Deploying from Docker Hub"
echo "============================="
echo "Docker Hub Username: $DOCKER_USERNAME"
echo "Project Name: $PROJECT_NAME"
echo "Version: $VERSION"
echo "Domain: $DOMAIN"
echo ""

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Please run as root (use sudo)"
    exit 1
fi

# Update docker-compose-production.yml with correct username
echo "📝 Updating docker-compose with your Docker Hub username..."
sed -i "s/your-dockerhub-username/$DOCKER_USERNAME/g" docker-compose-production.yml

# Install Docker if not installed
if ! command -v docker &> /dev/null; then
    echo "📦 Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl start docker
    systemctl enable docker
    rm get-docker.sh
fi

# Install Docker Compose if not installed
if ! command -v docker-compose &> /dev/null; then
    echo "📦 Installing Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p nginx/ssl
mkdir -p data

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose-production.yml down || true

# Pull latest images
echo "📥 Pulling latest images from Docker Hub..."
docker-compose -f docker-compose-production.yml pull

# Start services
echo "🚀 Starting services..."
docker-compose -f docker-compose-production.yml up -d

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 30

# Install Certbot if not installed
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing Certbot..."
    apt update
    apt install -y certbot python3-certbot-nginx
fi

# Get SSL certificate
echo "🔒 Obtaining SSL certificate..."
certbot certonly --nginx -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive || {
    echo "⚠️ SSL certificate setup failed. You may need to:"
    echo "1. Check DNS records are pointing to this server"
    echo "2. Wait for DNS propagation (5-30 minutes)"
    echo "3. Run: certbot certonly --nginx -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos"
}

# Update nginx configuration with SSL
echo "🔧 Updating Nginx configuration..."
if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    # Update nginx.conf to use Let's Encrypt certificates
    sed -i "s|/etc/nginx/ssl/cert.pem|/etc/letsencrypt/live/$DOMAIN/fullchain.pem|g" nginx/nginx.conf
    sed -i "s|/etc/nginx/ssl/key.pem|/etc/letsencrypt/live/$DOMAIN/privkey.pem|g" nginx/nginx.conf
    
    # Copy certificates to nginx container
    docker cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem my-website-nginx:/etc/nginx/ssl/cert.pem
    docker cp /etc/letsencrypt/live/$DOMAIN/privkey.pem my-website-nginx:/etc/nginx/ssl/key.pem
    
    # Restart nginx
    docker-compose -f docker-compose-production.yml restart nginx
fi

# Show status
echo ""
echo "✅ Deployment completed!"
echo "========================="
echo "🌐 Website: https://$DOMAIN"
echo "🔗 API: https://$DOMAIN/api"
echo ""
echo "📊 Container Status:"
docker-compose -f docker-compose-production.yml ps

echo ""
echo "📋 Useful commands:"
echo "- View logs: docker-compose -f docker-compose-production.yml logs -f"
echo "- Stop services: docker-compose -f docker-compose-production.yml down"
echo "- Restart services: docker-compose -f docker-compose-production.yml restart"
echo "- Update images: docker-compose -f docker-compose-production.yml pull && docker-compose -f docker-compose-production.yml up -d"
