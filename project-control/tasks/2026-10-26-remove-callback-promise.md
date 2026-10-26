# Remove timed callback promise — 2026-10-26

The owner requested removal of “Оставьте заявку — перезвоним в течение 30 минут в рабочее время” on all languages.

Removed the localized timed-callback sentences from homepages, contact pages and service forms, including analogous 24-hour promises on ET home/contact and RU/ET/EN about pages. Where a sentence shared a paragraph with the address and opening hours, those details are preserved.

Cleared 36 matching source form subtitles. The shared form partial now renders its explanatory paragraph only when a nonempty subtitle exists. Useful booking instructions on diagnostics, oil-change and other pages remain. Standalone pages are edited in place.

Verification: no remaining timed-callback promise in active HTML; form markup matches the previous versions byte for byte; quality gate passes for 92 pages; a second build must preserve all prepared files. Routes, contacts, prices and Firebase configuration are unchanged. Publication uses the existing Firebase workflow, followed by a live sitemap-wide check.
