# Webasto information recovery — 2026-10-26

The owner reported missing information on /services/webasto-diagnostika and supplied a screenshot showing the hero followed immediately by a large booking form.

## Evidence and cause

The live ET HTML matched the checkout exactly. The page still contained its full Webasto process, checks, benefits, testimonials, FAQ and final CTA. Browser inspection found those sections visible, without JavaScript errors, starting around y=2602 px because the booking form and map preceded the main content. Git history confirms this ordering predates the recent edits; the last callback-promise removal did not change the ET Webasto file. A sitemap-wide comparison of headings between e102ed7 and dc6cf5a audits the previous edit for unintended section loss.

## Recovery

Move the entire existing booking form and map after all six information sections and before the footer. The original six wb-section blocks are preserved byte for byte: 5 process steps, 8 inspection items, 4 benefits, testimonials, 6 FAQ items and final CTA. Preserve current contact details, form behaviour and URLs.

The top CTA also contained an overlooked promise to respond within 30 minutes (“vastame 30 minutiga”). Removed that sentence to honour the owner's preceding request; the Webasto symptom question and booking button remain.

## Verification

- Checked the preceding callback edit's content headings across all 86 canonical pages.
- RU/EN Webasto content headings are unchanged from before the callback edit.
- Browser verification at 1440, 390 and 320 px: main information/FAQ before booking/map; all section items present; FAQ accordion and mobile menu work; no horizontal overflow or JavaScript errors. No actual lead submission.
- Quality gate extended to catch missing Webasto information items and booking forms placed before the information/FAQ.
- Normal project quality gate and repeated generation checks pass.
- Before/after HTML, browser structure and screenshots are in tmp/webasto-recovery/.

Publication uses the existing Firebase workflow. Live verification checks section ordering, item counts and full information-block identity against the pre-recovery snapshot.
