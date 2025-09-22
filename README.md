# Wunderwerk AI Website

A modern, responsive marketing website for Wunderwerk AI, built for deployment on GitHub Pages with a custom domain.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with clean, elegant UI
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and Schema.org markup
- **Performance Focused**: Minimal JavaScript, optimized images, accessible design
- **GitHub Pages Ready**: Pre-configured for custom domain deployment

## 📁 Project Structure

```
wunderwerk-ai-website/
├── index.html              # Main homepage
├── privacy.html            # Privacy policy page
├── 404.html               # Custom 404 error page
├── CNAME                  # Custom domain configuration
├── favicon.ico            # Site favicon
├── manifest.webmanifest   # PWA manifest
├── sitemap.xml           # SEO sitemap
├── robots.txt            # Search engine directives
├── css/
│   └── styles.css        # Main stylesheet with responsive design
├── js/
│   └── main.js           # Minimal JavaScript functionality
└── assets/
    ├── logo.svg          # Scalable company logo
    ├── og.png            # Open Graph image (1200x630px)
    ├── og-template.html  # Template for generating OG image
    ├── icon-192.png      # PWA icon (192x192px)
    └── icon-512.png      # PWA icon (512x512px)
```

## 🛠 Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in a web browser, or
3. **Serve locally** using a simple HTTP server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with live-server)
   npx live-server
   
   # Using VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

## 🌐 GitHub Pages Deployment

### Step 1: Create Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Wunderwerk AI website

🎉 Complete static website with:
- Responsive design with dark/light mode
- SEO optimization and meta tags
- Custom domain configuration for wunderwerk.ai
- Performance-optimized assets

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/wunderwerk-ai-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Configure GitHub Pages

1. **Go to** your repository on GitHub
2. **Click** Settings → Pages (in left sidebar)
3. **Under "Source"**, select "Deploy from a branch"
4. **Select** branch: `main` and folder: `/ (root)`
5. **Under "Custom domain"**, enter: `wunderwerk.ai`
6. **Check** "Enforce HTTPS" (after DNS is configured)
7. **Click** Save

### Step 3: Configure DNS Records

Configure the following DNS records at your domain registrar:

#### For Root Domain (wunderwerk.ai)

**A Records** (point to GitHub Pages IPs):
```
Type: A
Name: @ (or wunderwerk.ai)
Value: 185.199.108.153

Type: A  
Name: @ (or wunderwerk.ai)
Value: 185.199.109.153

Type: A
Name: @ (or wunderwerk.ai)  
Value: 185.199.110.153

Type: A
Name: @ (or wunderwerk.ai)
Value: 185.199.111.153
```

**AAAA Records** (IPv6 support):
```
Type: AAAA
Name: @ (or wunderwerk.ai)
Value: 2606:50c0:8000::153

Type: AAAA
Name: @ (or wunderwerk.ai)
Value: 2606:50c0:8001::153

Type: AAAA
Name: @ (or wunderwerk.ai)
Value: 2606:50c0:8002::153

Type: AAAA
Name: @ (or wunderwerk.ai)
Value: 2606:50c0:8003::153
```

#### For WWW Subdomain (Optional)

**CNAME Record** (redirects www to apex):
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### Step 4: Verify Deployment

1. **Wait** 5-15 minutes for DNS propagation
2. **Visit** https://wunderwerk.ai to verify the site loads
3. **Check** that HTTPS is working and enforced
4. **Test** www.wunderwerk.ai redirects to wunderwerk.ai (if configured)

## 🔧 Quick Commands Reference

```bash
# Check current repository status
git status

# Add new changes
git add .

# Commit changes
git commit -m "Update: description of changes"

# Push to GitHub (triggers auto-deployment)
git push origin main

# Create and switch to new branch
git checkout -b feature-name

# View commit history
git log --oneline
```

## 📝 Content Updates

### Updating Content
- **Edit** HTML files directly for content changes
- **Modify** `css/styles.css` for styling updates
- **Update** `js/main.js` for functionality changes

### SEO Updates
- **Update** `sitemap.xml` when adding new pages
- **Modify** meta descriptions in HTML `<head>` sections
- **Update** Open Graph image if branding changes

### Asset Updates
- **Replace** `assets/logo.svg` for logo changes
- **Generate new** `favicon.ico` from updated logo
- **Update** `assets/og.png` for social media previews

## 🎨 Customization

### Color Scheme
Edit CSS variables in `css/styles.css`:
```css
:root {
    --accent-primary: #007bff;        /* Primary brand color */
    --accent-primary-hover: #0056b3;  /* Hover state */
    --accent-secondary: #28a745;      /* Secondary actions */
}
```

### Typography
Update font stack in body selector:
```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Layout
- **Responsive breakpoints**: Defined at 768px for mobile
- **Container max-width**: 1200px for desktop
- **Grid systems**: CSS Grid for services, process, and case studies

## 🔍 SEO Features

- ✅ **Semantic HTML**: Proper heading hierarchy and landmarks
- ✅ **Meta Tags**: Title, description, canonical URLs
- ✅ **Open Graph**: Facebook/LinkedIn social sharing
- ✅ **Twitter Cards**: Twitter social sharing  
- ✅ **Schema.org**: Organization structured data
- ✅ **Sitemap**: XML sitemap for search engines
- ✅ **Robots.txt**: Search engine crawling directives

## ♿ Accessibility Features

- ✅ **Keyboard Navigation**: Full keyboard support
- ✅ **Focus States**: Visible focus indicators
- ✅ **Alt Text**: All images have descriptive alt attributes
- ✅ **Semantic Structure**: Proper heading hierarchy
- ✅ **Color Contrast**: WCAG AA compliant contrast ratios
- ✅ **Reduced Motion**: Respects user motion preferences

## 🚨 Troubleshooting

### Common Issues

**Site not loading after DNS changes:**
- Wait up to 48 hours for full DNS propagation
- Use `dig wunderwerk.ai` to check DNS resolution
- Clear browser cache and try incognito mode

**HTTPS not working:**
- Ensure "Enforce HTTPS" is enabled in GitHub Pages settings
- Verify all DNS records are correctly configured
- Wait for GitHub to provision SSL certificate

**Images not displaying:**
- Check file paths are correct (case-sensitive)
- Ensure images are committed to the repository
- Verify image files are not corrupted

### DNS Verification Commands

```bash
# Check A records
dig wunderwerk.ai A

# Check AAAA records  
dig wunderwerk.ai AAAA

# Check CNAME for www
dig www.wunderwerk.ai CNAME

# Trace DNS propagation
dig +trace wunderwerk.ai
```

## 📞 Support

For technical issues with this website:
- **Check** the GitHub repository issues
- **Review** GitHub Pages documentation
- **Contact** hello@wunderwerk.ai for business inquiries

## 📄 License

This website code is proprietary to Wunderwerk AI. The design and content are protected by copyright.

---

**Built with ❤️ for Wunderwerk AI**  
Deploy with confidence using GitHub Pages + Custom Domain