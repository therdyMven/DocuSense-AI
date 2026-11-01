# DocuSense AI prototype

A browser-based prototype of the LYDO Cabanglasan document workflow and Youth Digital Information System described in the attached Chapters 1–3.

## Run locally

From this folder, start Python's built-in static server:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). No package installation or external service is required.

## Included workflows

- Document inbox for PDF, DOCX, XLS, and XLSX submissions, with category and urgency suggestions, confidence flags, human correction, single- or multi-office routing, and status tracking.
- Youth registration for ages 15–30, NYC classification, and aggregate statistics by barangay and classification.
- Workspace-user and receiving-office administration, CSV export of aggregate reports, and a SHA-256 hash-chained activity ledger with an integrity check.
- Role preview for LYDO Officer, SK Chairperson, and LGU Planning Office.

## Prototype limitations

This is a front-end demonstration, not a production system. Documents and records are saved only in the current browser's local storage. The classifier is a filename/notes heuristic—not the study's trained logistic-regression model—and this prototype does not extract text from uploaded files or run OCR. Role switching is only a UI preview; authentication and authorization are not enforced by a server. All preloaded youth records are fictional. Do not upload documents or enter real personal or sensitive information.
