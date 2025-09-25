# 🚀 Netlify Deployment Steps for E-KYC Blockchain Project

## ✅ Step 1: Project Build Verification (COMPLETED)
Your project has been successfully built locally and is ready for deployment.

## 📋 Step 2: Netlify Account Setup and Repository Connection

### 2.1 Create/Login to Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up for free or login to your existing account

### 2.2 Connect Your Repository
1. Click **"New site from Git"**
2. Choose **GitHub** as your Git provider
3. Authorize Netlify to access your repositories
4. Select your **E-KYC-using-blockchain** repository

### 2.3 Configure Build Settings
Use these exact settings:

```
Build command: npm run netlify-build
Publish directory: dist/spa
Functions directory: netlify/functions
```

**⚠️ IMPORTANT: Do NOT deploy yet! Click "Save" but wait before deploying.**

## 🔐 Step 3: Configure Environment Variables

In your Netlify site dashboard, go to:
**Site settings → Environment variables → Add variable**

Add these variables one by one:

### Required Environment Variables:

```bash
# Database Configuration
DATABASE_URL=postgresql://username:password@host:port/database_name?sslmode=require

# Application Configuration
NODE_ENV=production
JWT_SECRET=your_super_secure_jwt_secret_here_replace_with_random_string_123456789
ENCRYPTION_KEY=your_32_character_encryption_key_here_12345

# CORS Configuration (update with your actual Netlify URL after deployment)
CORS_ALLOWED_ORIGINS=https://your-site-name.netlify.app

# Optional Configuration
MAX_FILE_SIZE=5242880
MAX_FILES_PER_UPLOAD=10
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/jpg,application/pdf
```

### 🔑 Security Note:
- Replace `your_super_secure_jwt_secret_here_replace_with_random_string_123456789` with a strong random string
- Replace `your_32_character_encryption_key_here_12345` with exactly 32 characters
- After deployment, update `CORS_ALLOWED_ORIGINS` with your actual Netlify URL

## 🚀 Step 4: Deploy Your Site

1. After setting all environment variables, click **"Deploy site"**
2. Wait for the deployment to complete (usually 2-5 minutes)
3. Note your Netlify URL (something like `https://amazing-site-name.netlify.app`)

## 🔧 Step 5: Update CORS Configuration

1. Go back to **Site settings → Environment variables**
2. Update the `CORS_ALLOWED_ORIGINS` variable with your actual Netlify URL
3. Trigger a new deployment by going to **Deploys** and clicking **"Trigger deploy"**

## ✅ Step 6: Test Your Deployment

Test these endpoints after deployment:

1. **Main App**: `https://your-site.netlify.app/`
2. **Health Check**: `https://your-site.netlify.app/api/ping`
3. **Database Test**: `https://your-site.netlify.app/api/health`
4. **KYC Stats**: `https://your-site.netlify.app/api/kyc/stats`
5. **Blockchain Status**: `https://your-site.netlify.app/api/blockchain/status`

### Expected Responses:

**Health Check (`/api/ping`):**
```json
{
  "message": "pong",
  "success": true,
  "database": {
    "status": "connected"
  }
}
```

**Database Test (`/api/health`):**
```json
{
  "status": "ok",
  "database": {
    "connected": true
  }
}
```

## 🛠️ Troubleshooting

### If Build Fails:
1. Check build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility

### If Database Connection Fails:
1. Double-check `DATABASE_URL` in environment variables
2. Verify database credentials
3. Check function logs in Netlify dashboard

### If API Endpoints Don't Work:
1. Verify `netlify/functions` directory exists
2. Check that functions are deployed in Netlify dashboard
3. Test individual function endpoints

## 🎉 Success Indicators

Your deployment is successful when:
- ✅ Main app loads at your Netlify URL
- ✅ `/api/ping` returns database connected
- ✅ `/api/health` shows status "ok"
- ✅ All pages navigate correctly
- ✅ No console errors in browser

## 📞 Need Help?

If you encounter issues:
1. Check Netlify function logs
2. Verify all environment variables are set correctly
3. Test the build locally with `npm run netlify-build`
4. Review the detailed troubleshooting in `NETLIFY-DATABASE-SETUP.md`

---

**Next Step**: Follow Step 2 above to connect your repository to Netlify!