# Form photo upload

## Owner

Codex

## Scope

Update the public lead forms in the current site languages (ET, RU, EN):

- make customer name mandatory in the UI and backend validation;
- keep vehicle registration number mandatory;
- add optional photo/document attachments to the request form;
- accept JPG/JPEG, PNG, HEIC/HEIF and PDF;
- allow up to 3 files, max 5 MB per file and 10 MB total;
- show a localized note asking customers with foreign-registered vehicles to attach the vehicle registration certificate;
- send accepted attachments only with the admin notification email;
- keep the existing customer auto-reply flow unchanged;
- preserve the existing JSON `/api/lead` contract by transporting attachments as validated base64 payloads.

## Languages

Public site: ET / RU / EN.

The backend's existing FI auto-reply support remains intact; there is currently no public FI site section.

## Review

This changes forms and lead flow, so review is required before merge and production deploy.
