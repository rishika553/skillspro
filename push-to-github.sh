#!/bin/bash

# SkillsPro - Push to Your GitHub Account
# This script helps you push your code to YOUR GitHub repository

echo "🚀 SkillsPro - GitHub Setup"
echo "=========================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository"
    exit 1
fi

# Check if there's already a remote
CURRENT_REMOTE=$(git remote -v)
if [ ! -z "$CURRENT_REMOTE" ]; then
    echo "⚠️  Warning: Remote already exists:"
    echo "$CURRENT_REMOTE"
    echo ""
    read -p "Do you want to remove it and add your own? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git remote remove origin
        echo "✅ Removed existing remote"
    else
        echo "❌ Cancelled"
        exit 1
    fi
fi

# Get GitHub username
echo ""
read -p "Enter YOUR GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Error: Username cannot be empty"
    exit 1
fi

# Get repository name
echo ""
read -p "Enter repository name (default: skillspro): " REPO_NAME
REPO_NAME=${REPO_NAME:-skillspro}

# Construct repository URL
REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo ""
echo "📋 Summary:"
echo "  Username: $GITHUB_USERNAME"
echo "  Repository: $REPO_NAME"
echo "  URL: $REPO_URL"
echo ""

read -p "Is this correct? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cancelled"
    exit 1
fi

# Add remote
echo ""
echo "🔗 Adding remote..."
git remote add origin "$REPO_URL"

if [ $? -eq 0 ]; then
    echo "✅ Remote added successfully"
else
    echo "❌ Failed to add remote"
    exit 1
fi

# Verify remote
echo ""
echo "📡 Verifying remote..."
git remote -v

# Ask if user wants to push now
echo ""
read -p "Do you want to push now? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "🚀 Pushing to GitHub..."
    echo ""
    echo "⚠️  Note: You'll need to authenticate with:"
    echo "  - Personal Access Token (recommended), or"
    echo "  - GitHub Desktop, or"
    echo "  - SSH key"
    echo ""
    
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Successfully pushed to GitHub!"
        echo ""
        echo "🎉 Your repository is now available at:"
        echo "   https://github.com/$GITHUB_USERNAME/$REPO_NAME"
        echo ""
        echo "🚀 Next steps:"
        echo "   1. Visit your repository on GitHub"
        echo "   2. Deploy to Vercel: https://vercel.com/new"
        echo "   3. Add environment variables (DATABASE_URL, ADMIN_USERNAME, ADMIN_PASSWORD)"
        echo "   4. Your app will be live!"
    else
        echo ""
        echo "❌ Push failed. Common issues:"
        echo "   1. Repository doesn't exist - Create it first at https://github.com/new"
        echo "   2. Authentication failed - Use Personal Access Token"
        echo "   3. Permission denied - Check repository access"
        echo ""
        echo "📖 See SETUP_YOUR_GITHUB.md for detailed instructions"
    fi
else
    echo ""
    echo "✅ Remote configured. Push later with:"
    echo "   git push -u origin main"
fi

echo ""
echo "Done! 🎉"
