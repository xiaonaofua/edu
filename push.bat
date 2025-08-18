@echo off
:: =======================================================
:: Quick Push Script for Mountain to Future Project
:: =======================================================
:: This is a simplified script for quick code commits
:: Use deploy.bat for full deployment with checks
:: =======================================================

echo.
echo ========================================================
echo  Mountain to Future - Quick Push
echo ========================================================
echo.

:: Check if we're in the right directory
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Please run this script from the project root directory.
    pause
    exit /b 1
)

echo Current Git status:
git status --short
echo.

set /p COMMIT_MSG="Enter commit message: "
if "%COMMIT_MSG%"=="" (
    echo ERROR: Commit message is required!
    pause
    exit /b 1
)

echo.
echo Adding files to Git...
git add .

echo Committing changes...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo.
    echo No changes to commit or commit failed.
    pause
    exit /b 0
)

echo Pushing to GitHub...
git push origin master
if errorlevel 1 (
    echo.
    echo ERROR: Push failed!
    echo Please check your network connection and try again.
    pause
    exit /b 1
)

echo.
echo ✅ Changes pushed successfully!
echo ⏳ GitHub Actions will automatically deploy your changes
echo 🌐 Site: https://xiaonaofua.github.io/edu/
echo.
pause