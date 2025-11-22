# Vercel Deployment Guide

## 🚀 Quick Start: Deploy via Vercel Dashboard

### Step 1: Sign Up for Vercel (Free Account)

1. **Go to Vercel**: https://vercel.com
2. **Click "Sign Up"** (top right corner)
3. **Choose "Continue with GitHub"**
   - This connects your GitHub account to Vercel
   - Authorize Vercel to access your repositories
4. **Complete the signup process**

### Step 2: Import Your GitHub Repository

1. **In Vercel Dashboard**, click **"Add New..."** → **"Project"**
2. **Find your repository**: `mhanxchu/project_boldify`
3. **Click "Import"** next to your repository

### Step 3: Configure Deployment Settings

**⚠️ IMPORTANT: Root Directory Setting**

Since your Next.js app is in the `my-app` subdirectory, you MUST configure this:

1. **Click "Configure Project"** or look for **"Root Directory"** setting
2. **Set Root Directory**: `my-app`
   - This tells Vercel where your Next.js app is located
3. **Verify other settings** (usually auto-detected):
   - **Framework Preset**: Next.js ✅
   - **Build Command**: `npm run build` ✅
   - **Output Directory**: `.next` ✅
   - **Install Command**: `npm install` ✅

**Environment Variables** (if needed):
- If your project uses environment variables, add them in the "Environment Variables" section
- Check your `.env.example` file for required variables
- **Never commit secrets** - add them in Vercel dashboard only

### Step 4: Deploy

1. **Click "Deploy"** button
2. **Wait for build** (usually 1-3 minutes)
   - You'll see build logs in real-time
   - Watch for any errors
3. **Success!** You'll see "Congratulations!" message

### Step 5: Find Your Live URL

**Your Production URL:**
- Format: `https://project-boldify.vercel.app` or `https://project-boldify-[hash].vercel.app`
- **This is your live website URL!**
- Shown on the deployment success page
- Also visible in your project dashboard

**Project Dashboard:**
1. Go to: https://vercel.com/dashboard
2. Click on your project: **`project_boldify`**
3. You'll see:
   - **Production URL** (main branch) - This is your live site!
   - Recent deployments list
   - Analytics (if enabled)
   - Settings and configuration

**To Share Your Website:**
- Copy the **Production URL** from the dashboard
- Share it: `https://your-project-name.vercel.app`
- This URL is public and accessible to anyone

### Step 6: Understanding Automatic Deployments

**How It Works:**
1. **Push to GitHub** → Vercel automatically detects changes
2. **Automatic Build** → Runs `npm install` and `npm run build`
3. **Automatic Deployment** → Deploys your changes
4. **Live in Seconds** → Your site is updated automatically

**Deployment Types:**

1. **Production Deployments**
   - Triggered by pushes to `main` branch
   - Deploys to your **Production URL**
   - This is your live website

2. **Preview Deployments**
   - Triggered by pushes to other branches
   - Creates unique preview URLs
   - Format: `https://project-boldify-[branch]-[hash].vercel.app`
   - Perfect for testing before merging

3. **Pull Request Deployments**
   - Each PR gets its own preview URL
   - Automatically created when you open a PR
   - Great for code reviews and testing

## 📍 Where to Find Your URLs

**After First Deployment:**

1. **Production URL** (Main Site):
   - Dashboard → Your Project → "Domains" section
   - Or: Dashboard → Your Project → Top of page shows URL
   - Example: `https://project-boldify.vercel.app`

2. **Preview URLs** (For Testing):
   - Dashboard → Your Project → "Deployments" tab
   - Each deployment has its own URL
   - Click on any deployment to see its URL

3. **Custom Domain** (Optional):
   - Dashboard → Your Project → Settings → Domains
   - Add your own domain if you have one

## 🔄 Automatic Deployment Workflow

```
You push code to GitHub
    ↓
Vercel detects the push
    ↓
Vercel runs: npm install
    ↓
Vercel runs: npm run build
    ↓
Vercel deploys the build
    ↓
Your site is live! (automatic)
```

**No manual steps needed after initial setup!**

## ✅ Pre-Deployment Checklist

- ✅ Project is on GitHub: `mhanxchu/project_boldify`
- ✅ `package.json` has build script: `"build": "next build"`
- ✅ Next.js configured: Next.js 15
- ✅ `.gitignore` configured: Includes `.vercel`
- ✅ Build test passed: Project builds successfully

## 🛠️ Troubleshooting

**If deployment fails:**

1. **Check Build Logs**:
   - Go to your project in Vercel dashboard
   - Click on the failed deployment
   - Review the build logs for errors

2. **Common Issues**:
   - **Root Directory not set**: Make sure it's set to `my-app`
   - **Build command error**: Check `package.json` has correct build script
   - **Missing dependencies**: Ensure all packages are in `package.json`
   - **Environment variables**: Add any required env vars in Vercel dashboard

3. **Get Help**:
   - Vercel documentation: https://vercel.com/docs
   - Vercel community: https://github.com/vercel/vercel/discussions

## 🎯 Quick Reference

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Your Repository**: https://github.com/mhanxchu/project_boldify
- **Production URL**: Will be shown after first deployment
- **Root Directory**: `my-app` (IMPORTANT!)

---

**Ready to deploy?** Follow Steps 1-4 above and your site will be live in minutes! 🚀

