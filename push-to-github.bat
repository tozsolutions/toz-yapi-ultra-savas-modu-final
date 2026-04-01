@echo off
REM GitHub Push Script for Toz Yapı Ultra Savaş Modu (Windows)
REM This script helps you push the project to GitHub

echo =====================================
echo   Toz Yapı - GitHub Push Script
echo =====================================
echo.

REM Check if Git is initialized
if not exist ".git" (
    echo [ERROR] .git directory not found. Please run 'git init' first.
    exit /b 1
)

REM Check if remote is set
git remote -v | findstr "origin" >nul
if errorlevel 1 (
    echo [INFO] No remote 'origin' configured.
    echo.
    echo Please add your GitHub repository:
    echo   git remote add origin https://github.com/tozsolutions/toz-yapi-ultra-savas-modu-final.git
    echo.
    set /p REPO_URL="Enter your repository URL: "
    git remote add origin %REPO_URL%
)

REM Display current remote
echo [INFO] Remote configured:
git remote -v
echo.

REM Check if we're on the main branch
for /f "tokens=*" %%i in ('git branch --show-current') do set CURRENT_BRANCH=%%i
echo [INFO] Current branch: %CURRENT_BRANCH%
echo.

REM Push to GitHub
echo [INFO] Ready to push to GitHub...
echo.

REM Set upstream and push
git push -u origin main

if errorlevel 1 (
    echo.
    echo =====================================
    echo   [ERROR] Push failed!
    echo =====================================
    echo.
    echo Possible solutions:
    echo 1. Make sure you have write access to the repository
    echo 2. Check your GitHub credentials
    echo 3. Try: git push --force (if you know what you're doing)
    echo.
    exit /b 1
)

echo.
echo =====================================
echo   [SUCCESS] Successfully pushed to GitHub!
echo =====================================
echo.
echo Your project is now live at:
echo https://github.com/tozsolutions/toz-yapi-ultra-savas-modu-final
echo.

pause
