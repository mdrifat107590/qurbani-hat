
# Qurbani Hat

Qurbani Hat is a modern livestock marketplace built with Next.js and Tailwind CSS. Users can explore cattle, buffalo, goats, and sheep, view full details, and place a booking after authentication.

## Live URL

https://qurbani-hat.vercel.app

## Key Features

- Responsive navbar and footer
- Hero section with featured animals
- All animals page with price sorting
- Private details page with booking form
- Login, register, and Google social sign-in flow
- My profile page and update information route
- Toast notifications and loading states
- Not found page
- Environment-based configuration
- Animate.css for motion accents

## NPM Packages Used

- next
- react
- react-dom
- react-hot-toast
- animate.css
- firebase

## Environment Variables

Create a `.env.local` file based on the example below if you want to customize contact details or enable Firebase Google sign-in.

```bash
NEXT_PUBLIC_SITE_NAME=Qurbani Hat
NEXT_PUBLIC_SITE_URL=https://qurbani-hat.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=hello@qurbanihat.com
NEXT_PUBLIC_CONTACT_PHONE=+880 1711 000 000
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/qurbanihat
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/qurbanihat
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/qurbanihat
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
