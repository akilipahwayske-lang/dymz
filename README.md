# Dymz Rewards Ltd - Static Website

A modern, elegant static website recreated with beautiful aesthetics and smooth animations.

## 🌟 Features

- **Modern Design**: Contemporary dark theme with emerald green accents
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and scroll-triggered reveals
- **Fast Loading**: Optimized static HTML/CSS/JS
- **SEO Friendly**: Semantic HTML with proper meta tags

## 📁 File Structure

```
dymz-website/
├── index.html       # Main HTML file
├── styles.css       # All styling
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

## 🚀 Deployment to Cloudflare Pages

### Method 1: Via GitHub (Recommended)

1. **Create a new GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/dymz-website.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to Pages
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your repository
   - Configure build settings:
     - Build command: (leave empty for static site)
     - Build output directory: `/`
   - Click "Save and Deploy"

### Method 2: Direct Upload

1. **Prepare your files**
   - Make sure all files (index.html, styles.css, script.js) are in the same folder

2. **Deploy via Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to Pages
   - Click "Create a project"
   - Select "Direct Upload"
   - Upload your folder or drag and drop files
   - Click "Deploy site"

## 🛠️ Local Development

To run locally, simply open `index.html` in your browser:

```bash
# Option 1: Direct open
open index.html  # macOS
start index.html # Windows

# Option 2: Using Python's built-in server
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Using Node.js
npx serve
```

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #10b981;        /* Main green color */
    --primary-dark: #059669;   /* Darker green */
    --primary-light: #34d399;  /* Lighter green */
    --dark: #0f172a;           /* Dark background */
    --darker: #020617;         /* Darker background */
}
```

### Content
Edit the HTML content directly in `index.html`. All sections are clearly labeled with comments.

### Fonts
The site uses:
- **Playfair Display** for headings (serif)
- **Outfit** for body text (sans-serif)

To change fonts, update the Google Fonts link in the `<head>` section.

## 📱 Sections

1. **Navigation** - Fixed top navigation with smooth scroll
2. **Hero** - Large hero section with animated background
3. **Stats** - Animated counters showing company metrics
4. **Services** - Six service cards with icons and descriptions
5. **About** - Company story and mission
6. **Contact** - Contact form and location information
7. **Footer** - Links and company information

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

All rights reserved - Dymz Rewards Ltd © 2025

## 🤝 Support

For any questions or support, contact:
- **Location**: Syscraft Place, Westlands, Nairobi
- **Phone**: +1 (513) 264-2969

---

Built with ❤️ using HTML, CSS, and vanilla JavaScript
