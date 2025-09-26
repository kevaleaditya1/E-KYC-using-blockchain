#!/usr/bin/env node

/**
 * Secure Environment Variables Generator for Render Deployment
 * Generates secure random values for JWT_SECRET and ENCRYPTION_KEY
 */

import crypto from 'crypto';

console.log('🔐 Generating secure environment variables for Render deployment...\n');

// Generate JWT Secret (64 characters)
const jwtSecret = crypto.randomBytes(32).toString('hex');

// Generate Encryption Key (32 characters)
const encryptionKey = crypto.randomBytes(16).toString('hex');

console.log('📋 Copy these environment variables to your Render dashboard:');
console.log('═'.repeat(80));
console.log();

console.log('DATABASE_URL=postgresql://avnadmin:AVNS_ltoOZ6TzwV4Xg61XsSI@blockchain-maskeriya338-1f80.f.aivencloud.com:27251/defaultdb?sslmode=require');
console.log('NODE_ENV=production');
console.log('PORT=10000');
console.log(`JWT_SECRET=${jwtSecret}`);
console.log(`ENCRYPTION_KEY=${encryptionKey}`);
console.log('CORS_ALLOWED_ORIGINS=https://your-service-name.onrender.com');
console.log('MAX_FILE_SIZE=5242880');
console.log('MAX_FILES_PER_UPLOAD=10');
console.log('ALLOWED_FILE_TYPES=image/jpeg,image/png,image/jpg,application/pdf');
console.log('SYSTEM_NAME=Authen Ledger eKYC System');
console.log('LOG_LEVEL=info');
console.log('BLOCKCHAIN_FALLBACK_ENABLED=true');
console.log('SIMULATED_BLOCKCHAIN=true');

console.log();
console.log('═'.repeat(80));
console.log('⚠️  Important Notes:');
console.log('1. Add these variables one by one in Render: Environment → Add Environment Variable');
console.log('2. Update CORS_ALLOWED_ORIGINS with your actual Render URL after deployment');
console.log('3. Keep these values secure and never commit them to version control');
console.log('4. Your database URL is already configured for your Aiven PostgreSQL');
console.log();
console.log('🚀 Ready for Render deployment!');