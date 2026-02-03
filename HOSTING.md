# GitHub Pages Hosting Guide

## 🌐 How to Host Your Website Publicly

Your website is now on GitHub and can be hosted for **FREE** using GitHub Pages. Follow these steps:

## Step-by-Step Instructions

### Option 1: Using GitHub Web Interface (Easiest)

1. **Go to your repository**:
   - Visit: <https://github.com/neerajsinghg/core_tr>

2. **Access Settings**:
   - Click on the **Settings** tab (top right of the repository page)

3. **Navigate to Pages**:
   - In the left sidebar, scroll down and click on **Pages**

4. **Configure Source**:
   - Under "Build and deployment"
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` from the dropdown
   - **Folder**: Select `/ (root)`
   - Click **Save**

5. **Wait for Deployment** (1-2 minutes):
   - GitHub will automatically build and deploy your site
   - You'll see a message: "Your site is live at..."

6. **Access Your Live Website**:
   - Your website will be available at:
   - **<https://neerajsinghg.github.io/core_tr/>**

### Option 2: Using GitHub Actions (Advanced)

If you want more control, you can use GitHub Actions workflow (already configured in modern repos).

## ✅ Verification

After enabling GitHub Pages, verify your site is live:

1. Wait 1-2 minutes for the initial deployment
2. Visit: **<https://neerajsinghg.github.io/core_tr/>**
3. You should see your Corefront Technologies website!

## 🔄 Automatic Updates

Once GitHub Pages is enabled, any changes you push to the `main` branch will automatically update your live website:

```bash
# Make changes to your files
git add .
git commit -m "Update website content"
git push origin main

# Wait 1-2 minutes, and your live site will be updated!
```

## 🎨 Custom Domain (Optional)

If you want to use your own domain (e.g., <www.corefront-tech.com>):

1. **In GitHub Pages Settings**:
   - Enter your custom domain in the "Custom domain" field
   - Click Save

2. **Configure DNS** (at your domain registrar):
   - Add a CNAME record pointing to: `neerajsinghg.github.io`
   - Or add A records pointing to GitHub's IP addresses

3. **Enable HTTPS**:
   - Check "Enforce HTTPS" in GitHub Pages settings

## 📊 Your Live URLs

Once enabled, your website will be accessible at:

- **GitHub Pages URL**: <https://neerajsinghg.github.io/core_tr/>
- **Repository URL**: <https://github.com/neerajsinghg/core_tr>

## 🚀 Benefits of GitHub Pages

✅ **Free Hosting**: No cost, unlimited bandwidth
✅ **Automatic Deployment**: Push to GitHub = instant updates
✅ **HTTPS Enabled**: Secure by default
✅ **Custom Domains**: Use your own domain name
✅ **Version Control**: All changes tracked in Git
✅ **99.9% Uptime**: Reliable GitHub infrastructure

## 🔧 Troubleshooting

### Site Not Loading?

1. **Check deployment status**:
   - Go to repository → Actions tab
   - Look for "pages build and deployment" workflow
   - Ensure it completed successfully

2. **Verify settings**:
   - Settings → Pages
   - Ensure branch is set to `main` and folder is `/ (root)`

3. **Clear browser cache**:
   - Hard refresh: Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)

### 404 Error?

- Ensure `index.html` is in the root directory (it is!)
- Wait a few more minutes for deployment to complete

## 📱 Sharing Your Website

Once live, share your website with:

- **Clients**: <https://neerajsinghg.github.io/core_tr/>
- **Social Media**: Post the link on LinkedIn, Twitter, etc.
- **Email**: Include in your email signature
- **Business Cards**: Add QR code linking to your site

## 🎯 Next Steps After Hosting

1. ✅ Enable GitHub Pages (follow steps above)
2. ✅ Test the live URL
3. ✅ Share with stakeholders
4. 📊 Add Google Analytics (optional)
5. 🔍 Submit to search engines (Google Search Console)
6. 🎨 Consider custom domain
7. 📈 Monitor site performance

---

**Ready to go live?** Follow the steps above to make your website publicly accessible! 🚀
