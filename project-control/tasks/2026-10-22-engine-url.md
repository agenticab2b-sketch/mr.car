# Engine page URL migration

The owner requested publication of `/services/mootori-remont` in place of `/services/mootoriremont`.

- Renamed the ET page and updated generation data, navigation sources, public links, canonical URLs, hreflang and sitemap.
- Added 301 redirects for the old clean URL, .html and trailing-slash variants; existing legacy redirects point directly to the new URL.
- Preserved page content. Quality gate passes for all 92 HTML files; JSON-LD and redirect rules verified.
- Publication uses the existing Firebase Hosting workflow through main, as enforced by this clone's unchanged commit/push hooks.
