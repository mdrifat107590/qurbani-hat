export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Qurbani Hat",
  description:
    "A modern livestock marketplace for browsing animals, checking details, and booking for Qurbani.",
  liveUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://qurbani-hat.vercel.app",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@qurbanihat.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+880 1711 000 000",
  facebookUrl:
    process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/qurbanihat",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/qurbanihat",
  youtubeUrl:
    process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/qurbanihat",
};