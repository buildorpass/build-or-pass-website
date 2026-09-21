const FALLBACK_SITE_URL = "https://buildorpass.com";

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return FALLBACK_SITE_URL;
}

export const siteConfig = {
  name: "Build or Pass",
  title: "Build or Pass — Agentic AI Course",
  description:
    "A hands-on Agentic AI course. Build real projects, prep for interviews, and get hired with a portfolio you can defend. Join the waitlist.",
  email: "hello@buildorpass.com",
};
