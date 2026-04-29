# Michael Mitchell Personal Site

A single-page consulting site built with Next.js, Tailwind CSS, and Resend.

## What this is

A clean, fast, professional one-page site with these sections:
- Hero
- About
- Services (six offerings)
- Experience (timeline)
- Passions
- Contact (with working form)
- Footer

The site is built to deploy to **Vercel** with code stored on **GitHub** and a domain from **Cloudflare**.

---

## Setup walkthrough

### Step 1 — Create a GitHub account and a new repository (5 min)

1. Go to https://github.com and sign up if you don't have an account.
2. Click the **+** in the top right → **New repository**.
3. Name it something like `michaelmitchell-site` (private or public, your call).
4. **Don't** check "Initialize with README" (we already have one).
5. Click **Create repository**.
6. Leave the page open. You'll need the URL.

### Step 2 — Upload these files to GitHub

The simplest way (no command line needed):

1. On the empty repository page, click **uploading an existing file** (it's a link in the middle of the page).
2. Drag **all the files** from this project folder into the upload area.
   - Important: include hidden files like `.gitignore`. On Mac, press `Cmd+Shift+.` in Finder to show hidden files. On Windows, enable "Show hidden files" in File Explorer view options.
   - Do **not** upload the `node_modules` folder if it exists. It's huge and unnecessary.
3. Add a commit message ("Initial commit") and click **Commit changes**.

Slightly more advanced way: install [GitHub Desktop](https://desktop.github.com), clone the empty repo, drop these files in, commit, push.

### Step 3 — Sign up for Resend (5 min) — for the contact form

The contact form sends an email to Michael when someone fills it out. Resend is the email service that handles this. Free tier covers 3,000 emails per month, which is plenty.

1. Go to https://resend.com and sign up (free).
2. Verify your email.
3. In the Resend dashboard, go to **API Keys** → **Create API Key**.
4. Name it `michaelmitchell-site`. Permission: **Full access** (or Sending only).
5. Copy the API key. It starts with `re_`. **You will only see this once.** Save it somewhere safe.

You'll paste this key into Vercel in Step 5.

### Step 4 — Deploy to Vercel (3 min)

1. Go to https://vercel.com and sign up using "Continue with GitHub."
2. Click **Add New** → **Project**.
3. Vercel will list your GitHub repositories. Find `michaelmitchell-site` and click **Import**.
4. **Don't deploy yet.** First, expand the **Environment Variables** section and add these two:

   | Name | Value |
   |---|---|
   | `RESEND_API_KEY` | The `re_...` key you copied from Resend |
   | `CONTACT_EMAIL` | The email address where Michael wants to receive form submissions |

5. Click **Deploy**.
6. Wait about 60 seconds. Vercel will show "Congratulations" and give you a live URL like `michaelmitchell-site.vercel.app`.

The site is now live. Test the contact form by submitting a test message; it should arrive in Michael's inbox within seconds.

### Step 5 — Buy and connect a custom domain (15 min)

1. Go to https://cloudflare.com → **Domain Registration** → **Register Domains**.
2. Search for the domain you want (e.g., `michaelmitchell.dev`).
3. Buy it (~$10–12 for a .com, ~$10 for a .dev).
4. In Vercel: open your project → **Settings** → **Domains** → enter your domain → **Add**.
5. Vercel will show DNS records you need to add. They look like:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`
6. In Cloudflare: open your domain → **DNS** → **Records** → **Add record**. Add the records Vercel showed you.
7. Wait 5–30 minutes. Vercel will show "Valid Configuration" once DNS propagates. Your site is now live at your custom domain.

### Step 6 — Switch the Resend "from" address to your domain (recommended, 10 min)

By default, the contact form sends from `onboarding@resend.dev`. This works, but emails are more reliable if they come from your own domain.

1. In Resend → **Domains** → **Add Domain** → enter your domain (e.g., `michaelmitchell.dev`).
2. Resend will show DNS records to add. Add them in Cloudflare just like in Step 5.
3. Wait for verification (usually 10–30 minutes).
4. Open `app/api/contact/route.ts` in your repo and change:
   ```
   from: "Contact Form <onboarding@resend.dev>",
   ```
   to:
   ```
   from: "Contact Form <hello@yourdomain.com>",
   ```
5. Commit the change in GitHub. Vercel will auto-deploy in about 30 seconds.

---

## How to make edits going forward

Two paths.

### The simple path (no code skills needed)

1. Open the file you want to edit on github.com (e.g., `app/page.tsx`).
2. Click the pencil icon (top right) to edit in the browser.
3. Make your changes.
4. Scroll down → write a quick commit message → **Commit changes**.
5. Vercel will detect the change and deploy automatically within ~60 seconds.

### Or, ask Claude

Tell Claude what you want changed and have Claude rewrite the relevant file. Then paste the new file contents into GitHub (replacing the old version) and commit.

---

## Where to put the headshot

1. Save the photo as `headshot.jpg` (or `.png`).
2. Place it in the `public/` folder.
3. To display it on the site, you'll need to add an `<img>` tag to `app/page.tsx`. Tell Claude where you want it and what size, and Claude will write the code.

---

## Customization quick reference

| What you want to change | File to edit |
|---|---|
| Headline, services copy, experience entries, passions | `app/page.tsx` |
| Page title, social preview text | `app/layout.tsx` |
| Site colors, fonts | `tailwind.config.js` and `app/globals.css` |
| Email destination for contact form | Vercel → Settings → Environment Variables (`CONTACT_EMAIL`) |
| LinkedIn URL, contact email | Search for "michaelmitchell" in `app/page.tsx` |
| Favicon | Add `favicon.ico` to `public/` |

---

## Local development (optional, for techy editing)

If you want to preview changes locally before pushing them:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For local testing of the contact form, create a file called `.env.local` in the project root with:
```
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=your@email.com
```

`.env.local` is git-ignored, so the secrets won't end up on GitHub.

---

## Tech stack

- **Next.js 14** (React framework)
- **TypeScript** (typed JavaScript)
- **Tailwind CSS** (styling)
- **Resend** (transactional email)
- Hosted on **Vercel**, code on **GitHub**, domain via **Cloudflare**

Total monthly cost: $0 hosting + ~$1/month domain.
