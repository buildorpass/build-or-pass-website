import "../public/assets/css/main.scss";
import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../public/assets/custom.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import AppProviders from "./AppProviders";
import { getSiteUrl, siteConfig } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: getSiteUrl() }],
  keywords: [
    "Agentic AI",
    "AI course",
    "interview prep",
    "portfolio projects",
    "Build or Pass",
  ],
  icons: {
    icon: "/assets/images/common/logo-icon.svg",
    shortcut: "/favicon.ico",
    apple: "/assets/images/common/logo-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: getSiteUrl(),
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#178D72",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
