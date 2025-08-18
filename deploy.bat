@echo off
:: =======================================================
:: Mountain to Future - GitHub Pages Deployment Script
:: =======================================================
:: This batch file automates the process of deploying 
:: the Mountain to Future educational platform to GitHub Pages
:: =======================================================

echo.
echo ========================================================
echo  Mountain to Future - GitHub Pages Deployment
echo ========================================================
echo.

:: Check if we're in the right directory
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Please run this script from the project root directory.
    echo.
    pause
    exit /b 1
)

echo [1/7] Checking Git status...
git status --porcelain > temp_status.txt
set /p GIT_STATUS=<temp_status.txt
del temp_status.txt

if not "%GIT_STATUS%"=="" (
    echo.
    echo Changes detected in working directory:
    git status --short
    echo.
    echo Do you want to continue with deployment? ^(y/n^)
    set /p CONTINUE=
    if /i not "%CONTINUE%"=="y" (
        echo Deployment cancelled.
        pause
        exit /b 0
    )
)

echo [2/7] Running code quality checks...
echo   - ESLint check...
call npm run lint
if errorlevel 1 (
    echo.
    echo ERROR: ESLint check failed!
    echo Please fix linting errors before deployment.
    echo Run 'npm run lint:fix' to auto-fix some issues.
    echo.
    pause
    exit /b 1
)

echo   - TypeScript type check...
call npm run type-check
if errorlevel 1 (
    echo.
    echo ERROR: TypeScript type check failed!
    echo Please fix type errors before deployment.
    echo.
    pause
    exit /b 1
)

echo [3/7] Building project for production...
call npm run build
if errorlevel 1 (
    echo.
    echo ERROR: Build failed!
    echo Please check build errors and fix them.
    echo.
    pause
    exit /b 1
)

echo [4/7] Adding files to Git staging area...
git add .

echo [5/7] Creating commit...
set /p COMMIT_MSG="Enter commit message (or press Enter for default): "
if "%COMMIT_MSG%"=="" (
    set COMMIT_MSG=📦 Deploy updates to GitHub Pages
)

git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo.
    echo No changes to commit or commit failed.
    echo.
)

echo [6/7] Pushing to GitHub...
git push origin master
if errorlevel 1 (
    echo.
    echo ERROR: Push to GitHub failed!
    echo Please check your network connection and GitHub credentials.
    echo.
    pause
    exit /b 1
)

echo [7/7] Deployment initiated!
echo.
echo ========================================================
echo  Deployment Status
echo ========================================================
echo.
echo ✅ Code pushed to GitHub successfully!
echo ⏳ GitHub Actions will now build and deploy your site
echo 🌐 Your site will be available at:
echo    https://xiaonaofua.github.io/edu/
echo.
echo ℹ️  It may take a few minutes for changes to be visible
echo ℹ️  Check the Actions tab on GitHub for deployment status
echo.
echo Next steps:
echo 1. Go to https://github.com/xiaonaofua/edu
echo 2. Click on the "Actions" tab to monitor deployment
echo 3. Once complete, visit your live site!
echo.
echo ========================================================

:: Open GitHub repository in browser
set /p OPEN_GITHUB="Open GitHub repository in browser? ^(y/n^): "
if /i "%OPEN_GITHUB%"=="y" (
    start https://github.com/xiaonaofua/edu
)

echo.
echo Deployment script completed!
pause