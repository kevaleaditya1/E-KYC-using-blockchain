# 🚀 Render Deployment Steps for E-KYC Blockchain Project

## ✅ Build Verification (COMPLETED)
Your project has been successfully built locally and is ready for Render deployment.

## 📋 Step 1: Render Account Setup and Repository Connection

### 1.1 Create/Login to Render Account
1. Go to [render.com](https://render.com)
2. Sign up for free or login to your existing account

### 1.2 Connect Your Repository
1. Click **"New +"** in the Render dashboard
2. Select **"Web Service"**
3. Choose **GitHub** as your Git provider
4. Authorize Render to access your repositories
5. Select your **E-KYC-using-blockchain** repository

### 1.3 Configure Service Settings
Use these exact settings:

```
Service Name: ekyc-blockchain-app
Environment: Node
Region: Choose closest to your users (e.g., Ohio for US East)
Branch: main
Root Directory: . (leave empty for root)
Build Command: npm run build:render
Start Command: npm run start:render
```

**⚠️ IMPORTANT: Do NOT deploy yet! Click "Create Web Service" but wait for environment variables setup.**

## 🔐 Step 2: Configure Environment Variables

In your Render service dashboard, go to:
**Environment → Add Environment Variable**

Add these variables one by one:

### Required Environment Variables:

```bash
# Database Configuration
DATABASE_URL=postgresql://avnadmin:AVNS_ltoOZ6TzwV4Xg61XsSI@blockchain-maskeriya338-1f80.f.aivencloud.com:27251/defaultdb?sslmode=require

# Application Configuration
NODE_ENV=production
PORT=10000

# Security (Replace with new secure values)
JWT_SECRET=generate_new_secure_random_string_64_characters_long_here
ENCRYPTION_KEY=generate_new_32_character_key_here

# CORS Configuration (update with your actual Render URL after deployment)
CORS_ALLOWED_ORIGINS=https://your-service-name.onrender.com

# File Upload Configuration
MAX_FILE_SIZE=5242880
MAX_FILES_PER_UPLOAD=10
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/jpg,application/pdf

# System Configuration
SYSTEM_NAME=Authen Ledger eKYC System
LOG_LEVEL=info
```

### Optional Environment Variables:

```bash
# Blockchain Configuration
BLOCKCHAIN_FALLBACK_ENABLED=true
SIMULATED_BLOCKCHAIN=true

# Admin Configuration
ADMIN_EMAIL=admin@yourcompany.com
ADMIN_SESSION_TIMEOUT=3600000

# Monitoring
ENABLE_DEBUG_LOGS=false
```

### 🔑 Generate Secure Values:

Run this command locally to generate secure secrets:

```bash
node -e "
console.log('JWT_SECRET=' + require('crypto').randomBytes(32).toString('hex'));
console.log('ENCRYPTION_KEY=' + require('crypto').randomBytes(16).toString('hex'));
"
```

## 🚀 Step 3: Deploy Your Service

1. After setting all environment variables, click **"Create Web Service"**
2. Render will automatically:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Generate Prisma client (`npm run db:generate`)
   - Build the application (`npm run build`)
   - Deploy database migrations (`npm run db:deploy`)
   - Start the service (`npm run start:render`)

## 🔧 Step 4: Update CORS Configuration

1. Once deployment completes, note your Render URL (e.g., `https://ekyc-blockchain-app.onrender.com`)
2. Go back to **Environment Variables**
3. Update the `CORS_ALLOWED_ORIGINS` variable with your actual URL
4. Trigger a new deployment by clicking **"Manual Deploy"**

## ✅ Step 5: Test Your Deployment

Test these endpoints after deployment:

1. **Main App**: `https://your-service.onrender.com/`
2. **Health Check**: `https://your-service.onrender.com/api/ping`
3. **Database Test**: `https://your-service.onrender.com/api/health`
4. **KYC Stats**: `https://your-service.onrender.com/api/kyc/stats`
5. **Admin Dashboard**: `https://your-service.onrender.com/admin/dashboard`
6. **Blockchain Status**: `https://your-service.onrender.com/api/blockchain/status`

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
1. Check build logs in Render dashboard
2. Verify Node.js version compatibility
3. Ensure all dependencies are in `package.json`

### If Database Connection Fails:
1. Double-check `DATABASE_URL` in environment variables
2. Verify database allows external connections
3. Check database credentials

### If Application Doesn't Start:
1. Check start command: `npm run start:render`
2. Verify `dist/server/production.mjs` was created
3. Check application logs

## 📊 Render Deployment Features

### What You Get with Render:
- ✅ **Full-Stack Application**: React frontend + Express backend
- ✅ **Automatic HTTPS**: SSL certificates managed automatically
- ✅ **Database Integration**: PostgreSQL with Prisma ORM
- ✅ **API Endpoints**: Complete REST API with database operations
- ✅ **File Uploads**: Document upload and processing
- ✅ **Real-time Updates**: Live KYC status tracking
- ✅ **Admin Dashboard**: Complete admin interface
- ✅ **Blockchain Ready**: Integration points for blockchain features
- ✅ **Auto-deployment**: Push to main branch triggers deploy
- ✅ **Health Monitoring**: Built-in health checks and monitoring

### Performance Expectations:
- **Build Time**: 5-10 minutes
- **Start Time**: 30-60 seconds
- **Response Time**: < 500ms for API calls
- **Uptime**: 99.9% (Render SLA)

## 💰 Cost Estimation:
- **Web Service (Starter)**: $7/month
- **Database**: Use your existing Aiven PostgreSQL (free)
- **Total**: $7/month for production-ready deployment

## 🎉 Success Indicators

Your deployment is successful when:
- ✅ Build completes without errors
- ✅ Service starts and shows "Live" status
- ✅ Health endpoints return successful responses
- ✅ Frontend loads correctly
- ✅ API endpoints work properly
- ✅ Database connections are active
- ✅ Admin dashboard is accessible

---

**Next Step**: Follow Step 1 above to set up your Render account and connect your repository!