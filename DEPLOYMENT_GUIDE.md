# Quick Deployment Guide for Cloudflare Pages

## 🚀 Steps to Deploy Your Website

### 1. Prepare Your Files
You have 4 files that need to be uploaded:
- `index.html` - The main webpage
- `styles.css` - All the styling
- `script.js` - Interactive features
- `README.md` - Documentation

### 2. Upload to GitHub

**Option A: Using GitHub Desktop (Easiest)**
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Create a new repository in GitHub Desktop
3. Add your files to the repository folder
4. Commit with message "Initial website upload"
5. Publish to GitHub

**Option B: Using Command Line**
```bash
# Navigate to your folder
cd /path/to/your/website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial website upload"

# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3. Deploy on Cloudflare Pages

1. **Go to Cloudflare Pages**
   - Visit: https://dash.cloudflare.com/
   - Sign up/Log in
   - Click on "Pages" in the sidebar
   - Click "Create a project"

2. **Connect Your GitHub**
   - Select "Connect to Git"
   - Authorize Cloudflare to access GitHub
   - Select your repository
   - Click "Begin setup"

3. **Configure Build**
   - **Project name**: dymz-website (or your choice)
   - **Production branch**: main
   - **Build command**: (leave empty)
   - **Build output directory**: /
   - Click "Save and Deploy"

4. **Done! 🎉**
   - Your site will be live at: `https://dymz-website.pages.dev`
   - You can add a custom domain in settings

### Alternative: Direct Upload (No GitHub Needed)

1. Go to Cloudflare Pages
2. Click "Create a project"
3. Select "Direct upload"
4. Drag and drop ALL 4 files (index.html, styles.css, script.js, README.md)
5. Click "Deploy"

Your site goes live immediately!

### 🔄 Updating Your Site

**Via GitHub:**
1. Edit your files locally
2. Commit changes: `git add . && git commit -m "Update website"`
3. Push: `git push`
4. Cloudflare automatically rebuilds!

**Via Direct Upload:**
1. Go to your project in Cloudflare Pages
2. Click "Create new deployment"
3. Upload updated files

### 🌐 Custom Domain

To use your own domain (like www.dymz.co.ke):

1. In Cloudflare Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Enter your domain name
4. Follow the DNS instructions
5. Wait for DNS propagation (can take up to 24 hours)

### ✅ Testing Before Deploy

Open `index.html` in your browser to test locally first!

### 📞 Need Help?

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [GitHub Docs](https://docs.github.com/)

---

**Pro Tip**: Keep your GitHub repository private if you don't want others to see your code!
