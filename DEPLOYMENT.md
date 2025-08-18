# Deployment Guide for Mountain to Future

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### 📊 Deployment Status

- **Repository**: https://github.com/xiaonaofua/edu
- **Live Site**: https://xiaonaofua.github.io/edu/
- **Auto-deployment**: ✅ Enabled via GitHub Actions

### 🛠️ Windows Batch Files

Two batch files are provided for easy deployment on Windows:

#### `deploy.bat` - Full Deployment Script
```bash
# Features:
- Code quality checks (ESLint, TypeScript)
- Production build
- Git commit with custom message
- Push to GitHub
- Opens repository in browser
```

#### `push.bat` - Quick Push Script
```bash
# Features:
- Quick git add, commit, and push
- No quality checks (faster)
- Good for small updates
```

### 📝 Manual Commands

If you prefer manual deployment:

```bash
# 1. Build for production
npm run build

# 2. Add and commit changes
git add .
git commit -m "Your commit message"

# 3. Push to GitHub (triggers auto-deployment)
git push origin master
```

### ⚙️ How GitHub Pages Works

1. **Push to master branch** → Triggers GitHub Actions
2. **GitHub Actions builds** → Runs `npm run build`
3. **Creates static files** → Exports to `out/` directory
4. **Deploys to GitHub Pages** → Available at live URL

### 🔧 Configuration Files

- `next.config.js` → Static export configuration
- `.github/workflows/deploy.yml` → GitHub Actions workflow
- `package.json` → Build scripts
- `.nojekyll` → Disables Jekyll processing

### 📋 **IMPORTANT: First-Time Setup**

**You MUST manually configure GitHub Pages settings:**

1. Go to https://github.com/xiaonaofua/edu/settings/pages
2. Under "Source", select "**GitHub Actions**" (NOT "Deploy from a branch")
3. Save the settings
4. Push code to trigger the first deployment

**Why this step is required:**
- GitHub defaults to Jekyll for static sites
- We need to tell GitHub to use our custom Actions workflow
- The `.nojekyll` file prevents Jekyll processing

### 🐛 Troubleshooting

**Build fails?**
- Run `npm run lint` to check for errors
- Run `npm run type-check` for TypeScript issues

**Deployment not updating?**
- Check Actions tab: https://github.com/xiaonaofua/edu/actions
- Wait 2-5 minutes for deployment to complete

**404 on live site?**
- Make sure GitHub Pages is enabled in repository settings
- Check if the Actions workflow completed successfully

### 🎯 Next Steps

1. **Monitor deployment**: Check the Actions tab after pushing
2. **Test live site**: Visit https://xiaonaofua.github.io/edu/
3. **Future updates**: Use `deploy.bat` or `push.bat` for easy deployment

---

*This deployment guide was generated for the Mountain to Future educational platform.*