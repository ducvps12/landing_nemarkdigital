#!/bin/bash
# Deploy script for aaPanel Node project
# This script is called by CI/CD or manually

set -e

# Use aaPanel's Node.js
export PATH="/www/server/nodejs/v24.11.1/bin:$PATH"

# Limit Node.js memory usage
export NODE_OPTIONS="--max-old-space-size=512"

echo "=== Node version ==="
node -v

echo "=== Pulling latest code ==="
cd /www/wwwroot/landing_page
git pull origin main

echo "=== Installing production dependencies only ==="
npm install --omit=dev

echo "=== Building project ==="
npm run build

echo "=== Restarting Node project ==="
# Stop existing process
pkill -f "next start" 2>/dev/null || true
sleep 2

# Start with nohup
cd /www/wwwroot/landing_page
PORT=4001 nohup npx next start -p 4001 > /www/wwwlogs/node_landing.log 2>&1 &

echo "=== Deploy complete! ==="
echo "App running on port 4001"
