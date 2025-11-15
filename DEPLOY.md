# Deploy to Vercel - Quick Guide

## Prerequisites
- GitHub account
- Vercel account (free at vercel.com)
- This code pushed to a GitHub repository

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
cd romadix-landing
git init
git add .
git commit -m "Initial commit - Romadix landing page"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/romadix-landing.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel auto-detects Next.js settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. Click "Deploy"
6. Wait 30-60 seconds
7. ✅ Your site is live!

### 3. Add Custom Domain (romadix.com)

#### In Vercel Dashboard:
1. Go to your project
2. Click "Settings" → "Domains"
3. Add domain: `romadix.com`
4. Add domain: `www.romadix.com`
5. Vercel will show you DNS records needed

#### In Namecheap/Cloudflare DNS:

**For root domain (romadix.com):**
```
Type: A
Host: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

**Alternative (if using Cloudflare):**
- Turn OFF Cloudflare proxy (orange cloud → gray cloud)
- Or set up via Cloudflare CNAME flattening

### 4. SSL Certificate

✅ **Automatic!** Vercel provisions SSL certificates for free using Let's Encrypt.

No action needed - SSL will be ready in ~60 seconds after DNS propagates.

### 5. Verify Deployment

1. Wait 5-10 minutes for DNS propagation
2. Visit `https://romadix.com`
3. Check SSL: Should show green padlock 🔒
4. Check `https://www.romadix.com` redirects properly

## Environment Variables (Future)

When you add email service integration:

1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add keys like:
   ```
   MAILCHIMP_API_KEY=your_key_here
   CONVERTKIT_FORM_ID=your_form_id
   ```
3. Redeploy (auto-triggers or click "Redeploy")

## Continuous Deployment

✅ **Already enabled!** Every git push to `main` branch auto-deploys to production.

**Workflow:**
```bash
# Make changes locally
git add .
git commit -m "Update hero copy"
git push

# Vercel automatically builds and deploys
# Live in ~60 seconds
```

## Preview Deployments

Every pull request gets its own preview URL:
- Create branch: `git checkout -b feature/new-cta`
- Push changes: `git push origin feature/new-cta`
- Open PR on GitHub
- Vercel comments with preview link
- Test before merging to production

## Monitoring

Vercel Dashboard shows:
- Build logs
- Deployment history
- Analytics (page views, performance)
- Error tracking

## Rollback

If something breaks:
1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"
4. Instant rollback!

## Cost

✅ **100% Free** for your use case:
- Unlimited deployments
- 100GB bandwidth/month
- Automatic SSL
- Custom domains
- Built-in CDN

## Troubleshooting

**DNS not working?**
- Wait 10-30 minutes for propagation
- Check DNS with: `dig romadix.com`
- Verify Namecheap records match Vercel's instructions

**Build failing?**
- Check Vercel build logs
- Verify `package.json` is correct
- Run `npm run build` locally first

**SSL not working?**
- Wait 5 minutes after DNS propagates
- Vercel auto-provisions - no action needed
- Check Vercel Dashboard → Domains → SSL status

## Next Steps After Deployment

1. ✅ Test site on mobile devices
2. ✅ Run Lighthouse audit (should be 90+)
3. ✅ Share URL with 3-5 people for feedback
4. ✅ Set up Google Analytics (optional)
5. ✅ Integrate email capture service
6. ✅ Update LinkedIn company page with live URL

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Questions: bigein@romadix.com
