#!/bin/bash

# GitHub Push Script for Toz Yapı Ultra Savaş Modu
# This script helps you push the project to GitHub

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=====================================${NC}"
echo -e "${GREEN}  Toz Yapı - GitHub Push Script    ${NC}"
echo -e "${GREEN}=====================================${NC}"
echo ""

# Check if Git is initialized
if [ ! -d ".git" ]; then
    echo -e "${RED}Error: .git directory not found. Please run 'git init' first.${NC}"
    exit 1
fi

# Check if remote is set
if ! git remote -v | grep -q "origin"; then
    echo -e "${YELLOW}No remote 'origin' configured.${NC}"
    echo ""
    echo "Please add your GitHub repository:"
    echo "  git remote add origin https://github.com/tozsolutions/toz-yapi-ultra-savas-modu-final.git"
    echo ""
    read -p "Enter your repository URL: " REPO_URL
    git remote add origin "$REPO_URL"
fi

# Display current remote
echo -e "${GREEN}Remote configured:${NC}"
git remote -v
echo ""

# Check if we're on the main branch
CURRENT_BRANCH=$(git branch --show-current)
echo -e "${YELLOW}Current branch: ${CURRENT_BRANCH}${NC}"

# Push to GitHub
echo ""
echo -e "${YELLOW}Ready to push to GitHub...${NC}"
echo ""

# Set upstream and push
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}=====================================${NC}"
    echo -e "${GREEN}  ✓ Successfully pushed to GitHub! ${NC}"
    echo -e "${GREEN}=====================================${NC}"
    echo ""
    echo "Your project is now live at:"
    echo "https://github.com/tozsolutions/toz-yapi-ultra-savas-modu-final"
    echo ""
else
    echo ""
    echo -e "${RED}=====================================${NC}"
    echo -e "${RED}  ✗ Push failed!${NC}"
    echo -e "${RED}=====================================${NC}"
    echo ""
    echo "Possible solutions:"
    echo "1. Make sure you have write access to the repository"
    echo "2. Check your GitHub credentials"
    echo "3. Try: git push --force (if you know what you're doing)"
    echo ""
fi
