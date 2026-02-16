# 🔥 CLEAN URLs UPDATE - Remove .html Extensions

Your site is live at https://dymz.pages.dev/ but URLs still show `.html` extensions.
This guide will help you get clean URLs like `/about` instead of `/about.html`

## ✅ What Changed

I've updated your files:
1. **Added `_redirects` file** - Tells Cloudflare to serve clean URLs
2. **Updated all HTML files** - Changed internal links to clean URLs

## 🚀 How to Deploy the Update

### If Using Direct Upload:

1. **Download the new files** (especially `_redirects`)
2. Go to your Cloudflare Pages project
3. Click **"Create new deployment"**
4. Upload **ALL files** including the new `_redirects` file:
   - index.html ✅ (updated)
   - about.html ✅ (updated)
   - services.html ✅ (updated)
   - contact.html ✅ (updated)
   - legal.html ✅ (updated)
   - styles.css
   - script.js
   - package.json
   - **_redirects** ⭐ (NEW - important!)
5. Click **"Deploy"**
6. Wait 30 seconds

### If Using GitHub:

```bash
# Add the new _redirects file and updated HTML files
git add _redirects
git add *.html
git commit -m "Add clean URLs without .html extensions"
git push
```

Cloudflare will automatically rebuild!

## 🎯 After Deployment

Your URLs will work like this:

**Before:**
- ❌ https://dymz.pages.dev/contact.html
- ❌ https://dymz.pages.dev/about.html
- ❌ https://dymz.pages.dev/services.html

**After:**
- ✅ https://dymz.pages.dev/contact
- ✅ https://dymz.pages.dev/about
- ✅ https://dymz.pages.dev/services

**Both will work!** The old `.html` URLs will automatically redirect to clean URLs.

## 📋 What the _redirects File Does

The `_redirects` file tells Cloudflare:
1. If someone visits `/about.html` → redirect to `/about`
2. If someone visits `/about` → serve the `about.html` file
3. All internal links now use clean URLs

## ⚠️ Important Note

The `_redirects` file MUST be named exactly `_redirects` (with underscore, no extension).
Cloudflare Pages automatically reads this file.

## 🔍 Testing

After deployment:
1. Visit https://dymz.pages.dev/about (no .html)
2. Visit https://dymz.pages.dev/contact (no .html)
3. Try the old URL: https://dymz.pages.dev/contact.html
   - Should automatically redirect to `/contact`

## 💡 Troubleshooting

**If clean URLs don't work:**
1. Make sure `_redirects` file is uploaded
2. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Wait 1-2 minutes for Cloudflare to propagate changes
4. Try in incognito/private browsing mode

**If you see "Page not found":**
- The `_redirects` file might not be in the root directory
- Make sure all HTML files are uploaded
- Check Cloudflare Pages deployment logs

## 🎉 That's It!

Once deployed, your site will have beautiful clean URLs! 

All your internal navigation links are already updated to use clean URLs, so everything will work seamlessly.
