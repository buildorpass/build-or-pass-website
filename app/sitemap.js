import { getSiteUrl } from "@/lib/site";

const publicRoutes = [
  "",
  "/page-features",
  "/page-pricing",
  "/page-about",
  "/page-contact",
  "/page-privacy",
  "/page-terms",
  "/page-refund",
  "/page-shipping",
];

export default function sitemap() {
  const siteUrl = getSiteUrl();

  return publicRoutes.map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
