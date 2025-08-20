# Mountain to Future - PowerShell Deployment Script
# ====================================================
# UTF-8 encoding to avoid character issues

Write-Host ""
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "  Mountain to Future - GitHub Pages Deployment" -ForegroundColor Cyan  
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (!(Test-Path "package.json")) {
    Write-Host "ERROR: package.json not found!" -ForegroundColor Red
    Write-Host "Please run this script from the project root directory." -ForegroundColor Red
    exit 1
}

Write-Host "[1/6] Checking Git status..." -ForegroundColor Yellow
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host ""
    Write-Host "Changes detected in working directory:" -ForegroundColor Yellow
    git status --short
    Write-Host ""
    $continue = Read-Host "Do you want to continue with deployment? (y/n)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        Write-Host "Deployment cancelled." -ForegroundColor Yellow
        exit 0
    }
}

Write-Host "[2/6] Running TypeScript type check..." -ForegroundColor Yellow
npm run type-check
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: TypeScript type check failed!" -ForegroundColor Red
    Write-Host "Please fix type errors before deployment." -ForegroundColor Red
    exit 1
}

Write-Host "[3/6] Building project for production..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Build failed!" -ForegroundColor Red
    Write-Host "Please check build errors and fix them." -ForegroundColor Red
    exit 1
}

Write-Host "[4/6] Adding files to Git staging area..." -ForegroundColor Yellow
git add .

Write-Host "[5/6] Creating commit..." -ForegroundColor Yellow
$commitMsg = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "📦 Deploy updates to GitHub Pages"
}

git commit -m $commitMsg
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "No changes to commit or commit failed." -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "[6/6] Pushing to GitHub..." -ForegroundColor Yellow
git push origin master
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Push to GitHub failed!" -ForegroundColor Red
    Write-Host "Please check your network connection and GitHub credentials." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=======================================================" -ForegroundColor Green
Write-Host "  Deployment Status" -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Green
Write-Host ""
Write-Host "✅ Code pushed to GitHub successfully!" -ForegroundColor Green
Write-Host "⏳ GitHub Actions will now build and deploy your site" -ForegroundColor Yellow
Write-Host "🌐 Your site will be available at:" -ForegroundColor Cyan
Write-Host "    https://xiaonaofua.github.io/edu/" -ForegroundColor Cyan
Write-Host ""
Write-Host "ℹ️  It may take a few minutes for changes to be visible" -ForegroundColor Blue
Write-Host "ℹ️  Check the Actions tab on GitHub for deployment status" -ForegroundColor Blue
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com/xiaonaofua/edu" -ForegroundColor White
Write-Host "2. Click on the 'Actions' tab to monitor deployment" -ForegroundColor White
Write-Host "3. Once complete, visit your live site!" -ForegroundColor White
Write-Host ""
Write-Host "=======================================================" -ForegroundColor Green

# Open GitHub repository in browser
$openGitHub = Read-Host "Open GitHub repository in browser? (y/n)"
if ($openGitHub -eq "y" -or $openGitHub -eq "Y") {
    Start-Process "https://github.com/xiaonaofua/edu"
}

Write-Host ""
Write-Host "Deployment script completed!" -ForegroundColor Green
Read-Host "Press Enter to exit"