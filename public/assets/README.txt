=============================================================================
HOW TO ADD / REPLACE THE OFFICIAL FRESHERS FLYER (IMAGE OR PDF)
=============================================================================

Dear Seniors,

Replacing the placeholder with your official flyer is extremely easy! Follow these 3 steps:

STEP 1: Copy your Flyer into this folder (`public/assets/`)
------------------------------------------------------------
- If your flyer is an IMAGE (JPG, PNG, or WEBP):
  Save it as: `fresher-flyer.png` (or `.jpg`) inside `public/assets/`
  Example: `public/assets/fresher-flyer.png`

- If your flyer is a PDF:
  Save it as: `fresher-flyer.pdf` inside `public/assets/`
  Example: `public/assets/fresher-flyer.pdf`


STEP 2: Update `src/config/eventConfig.js`
------------------------------------------------------------
Open `src/config/eventConfig.js` in your editor and update the `flyer` section:

For an IMAGE:
```javascript
flyer: {
  enabled: true,                       // <-- Turn this to TRUE
  type: 'image',                       // <-- Set to 'image'
  src: '/assets/fresher-flyer.png',    // <-- File name in public/assets/
  title: 'Official Freshers Welcome Celebration Flyer 2026',
  downloadFileName: 'Freshers-2026-Flyer.png',
  ...
}
```

For a PDF:
```javascript
flyer: {
  enabled: true,                       // <-- Turn this to TRUE
  type: 'pdf',                         // <-- Set to 'pdf'
  src: '/assets/fresher-flyer.pdf',    // <-- File name in public/assets/
  title: 'Official Freshers Welcome Celebration Flyer 2026',
  downloadFileName: 'Freshers-2026-Flyer.pdf',
  ...
}
```

STEP 3: Save and Refresh
------------------------------------------------------------
That's it! The website will automatically display your official flyer with full-screen zoom, pan, and direct download buttons!
=============================================================================
