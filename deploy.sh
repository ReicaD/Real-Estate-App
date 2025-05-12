#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Clean up previous builds
echo "🧹 Cleaning up previous builds..."
rm -rf build
rm -rf node_modules/.cache

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
GENERATE_SOURCEMAP=false npm run build

# If using Vercel CLI
if command -v vercel &> /dev/null; then
  echo "🚀 Deploying to Vercel..."
  vercel --prod
else
  echo "ℹ️ Vercel CLI not found. Please deploy using the Vercel dashboard or install the Vercel CLI."
  echo "To install Vercel CLI: npm install -g vercel"
fi

echo "✅ Deployment process completed!" 