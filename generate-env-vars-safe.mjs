#!/usr/bin/env node

/**
 * Environment Variables Generator for Netlify Deployment
 * Generates secure random values for JWT_SECRET and ENCRYPTION_KEY
 */

import crypto from 'crypto';

console.log('🔐 Generating secure environment variables for Netlify deployment...\n');

// Generate JWT Secret (64 characters)
const jwtSecret = crypto.randomBytes(32).toString('hex');

// Generate Encryption Key (32 characters)
const encryptionKey = crypto.randomBytes(16).toString('hex');

console.log('📋 Copy these environment variables to your Netlify dashboard:');
console.log('═'.repeat(80));
console.log();

console.log('DATABASE_URL=postgresql://your_username:your_password@your_host:port/your_database?sslmode=require');
console.log('NODE_ENV=production');
console.log(`JWT_SECRET=${jwtSecret}`);
console.log(`ENCRYPTION_KEY=${encryptionKey}`);
console.log('CORS_ALLOWED_ORIGINS=https://your-site-name.netlify.app');
console.log('MAX_FILE_SIZE=5242880');
console.log('MAX_FILES_PER_UPLOAD=10');
console.log('ALLOWED_FILE_TYPES=image/jpeg,image/png,image/jpg,application/pdf');

console.log();
console.log('═'.repeat(80));
console.log('⚠️  Important Notes:');
console.log('1. Replace DATABASE_URL with your actual database connection string');
console.log('2. Update CORS_ALLOWED_ORIGINS with your actual Netlify URL after deployment');
console.log('3. Keep these values secure and never commit them to version control');
console.log('4. Add these variables one by one in Netlify: Site settings → Environment variables');
console.log();
console.log('🚀 Ready for Netlify deployment!');