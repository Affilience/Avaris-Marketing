# Avaris Marketing Website - Setup Guide

## Email Configuration

The contact form uses [Resend](https://resend.com) to send emails. To enable this functionality:

### 1. Sign up for Resend (Free Tier Available)

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day included)
3. Verify your email address

### 2. Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "Avaris Marketing Website")
5. Copy the generated API key

### 3. Configure Environment Variables

1. Open the `.env.local` file in the project root
2. Replace `your_resend_api_key_here` with your actual API key:

```
RESEND_API_KEY=re_your_actual_api_key_here
```

3. Save the file
4. Restart your development server for changes to take effect

### 4. Verify Email Domain (For Production)

For production use, you'll need to verify your sending domain:

1. In the Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `avarismarketing.com`)
4. Add the DNS records provided by Resend to your domain's DNS settings
5. Wait for verification (usually takes a few minutes)

Once verified, update the `from` field in `app/api/contact/route.ts`:

```typescript
from: 'Avaris Marketing <noreply@avarismarketing.com>',
```

### 5. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your email at `taylorelliott14@icloud.com`

## Performance Optimizations

The website has been optimized for fast loading:

### Image Optimization
- Portfolio images converted from PNG to JPG
- Compressed with 85% quality (87-89% file size reduction)
- Images reduced from ~1.5MB each to ~200KB each

### Font Optimization
- Using Next.js `next/font/google` for automatic font optimization
- Fonts use `display: swap` for better perceived performance

### Code Optimization
- Automatic code splitting via Next.js App Router
- Server-side rendering for initial page loads
- Static generation where possible

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Troubleshooting

### Contact Form Not Sending Emails

1. **Check API Key**: Ensure your `RESEND_API_KEY` in `.env.local` is correct
2. **Restart Server**: After changing `.env.local`, restart the dev server
3. **Check Console**: Look for error messages in the browser console and terminal
4. **Verify Resend Account**: Ensure your Resend account is active and not rate-limited

### Images Not Loading

1. **Hard Refresh**: Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Check Public Folder**: Verify `elevate-safety.jpg` and `aurix-recovery.jpg` exist in the `public/` directory
3. **Restart Server**: Sometimes a server restart helps with cached assets

## Contact

For issues or questions about this website:
- Email: taylor@avarismarketing.com
- Website: [https://avarismarketing.com](https://avarismarketing.com)
