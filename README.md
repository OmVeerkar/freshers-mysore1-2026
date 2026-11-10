# 🎓 College Freshers Welcome 2026 – Official Invitation & QR Portal

A modern, high-energy, responsive **Freshers Welcome Website** created by seniors to give the incoming junior batch an unforgettable first impression.

Featuring a dark royal navy, black, purple, and gold aesthetic, animated floating particles, celebratory confetti, background celebration music, a fullscreen flyer viewer (with image & PDF support), a live countdown, and a **high-resolution QR code generator (PNG & SVG)** ready for posters and passes.

---

## ✨ Key Features

1. **VIP Party Theme & Styling:**
   - Dark navy (`#070B19`), deep purple (`#1E0B38`), and rich gold (`#F59E0B`, `#FDE047`) palette.
   - Glassmorphic translucent cards with glowing golden and purple borders.
   - Animated celebratory particles on HTML5 canvas and confetti bursts.

2. **Master Welcome Message & Letter:**
   - Prominent headline: **"A GRAND WELCOME TO OUR NEWEST STARS!"**
   - Preserves the exact heartfelt letter from seniors.
   - Memorable slogan: **"NEW BEGINNINGS, ENDLESS MEMORIES – TOGETHER WE MAKE COLLEGE HISTORY!"**
   - Signature: **"WITH LOVE, YOUR SENIORS ❤️"**

3. **🎉 "VIEW THE FRESHERS FLYER" Action System:**
   - Large animated golden button with glowing hover effects.
   - Fullscreen modal viewer supporting zoom in (+), zoom out (-), reset zoom, and direct download.
   - **Initially displays the placeholder:** *"THE OFFICIAL FRESHERS FLYER IS COMING SOON!"*
   - Includes a sample flyer toggle and zero-code replacement system.

4. **📱 QR Code Generation & Download System:**
   - Dynamic QR generation pointing directly to the website's public address.
   - **Download High-Res PNG (1024x1024)** for invitation cards and banners.
   - **Download Vector SVG** for printing shops and graphic design.
   - **Print VIP Pass** mode with border and slogan: *"SCAN TO ENTER THE CELEBRATION!"*
   - Prevents hardcoded localhost issues by supporting auto-detection upon deployment and custom URL overrides.

5. **🎵 Celebration Background Music:**
   - Floating equalizer controller with mute/unmute options.
   - Begins playing on the user's first click or tap (complies with mobile browser autoplay restrictions).
   - Features procedural harmonic celebration chords (Web Audio API) so it functions 100% offline without broken external mp3 links, with support for custom `.mp3` drop-ins.

6. **📅 Event Countdown & Highlights:**
   - 6 celebration teaser cards (DJ & Dance Floor, Mr. & Miss Fresher Crown, Ice-breakers, Feast, 360° Glam Booth, Senior Mentorship).
   - Live Days/Hours/Minutes/Seconds countdown if a date is set, or an elegant *"Date & Venue Coming Soon"* announcement teaser if pending.

7. **🚀 Social Sharing:**
   - One-tap WhatsApp invitation sender with pre-filled message.
   - Telegram, Twitter/X, and Native Mobile Share Drawer.
   - Copy-to-clipboard with instant toast feedback.

---

## 📁 Project Structure

```
freshers-mysore'/
├── public/
│   ├── assets/
│   │   ├── fresher-flyer-placeholder.svg  # Default placeholder flyer
│   │   ├── sample-flyer.svg               # Sample active flyer for testing
│   │   └── README.txt                     # Quick flyer swap instructions
│   ├── _redirects                         # Netlify SPA routing
│   └── favicon.svg                        # Golden star favicon
├── src/
│   ├── config/
│   │   └── eventConfig.js                 # 🌟 Single master config file for seniors!
│   ├── components/
│   │   ├── Navbar.jsx                     # Top navigation & quick actions
│   │   ├── HeroSection.jsx                # Welcome letter & "VIEW FLYER" button
│   │   ├── FlyerModal.jsx                 # Fullscreen zoomable image/PDF viewer
│   │   ├── QRCodeModal.jsx                # PNG/SVG QR Generator & VIP Card
│   │   ├── CountdownSection.jsx           # Live timer & venue cards
│   │   ├── HighlightsSection.jsx          # Event features grid
│   │   ├── AudioPlayer.jsx                # Floating music controller
│   │   ├── ParticlesBackground.jsx        # Gold sparkles & confetti cannons
│   │   ├── SocialShareModal.jsx           # WhatsApp & mobile share drawer
│   │   └── Footer.jsx                     # "Made with ❤️ by Your Seniors"
│   ├── utils/
│   │   └── audioSynthesizer.js            # Procedural celebration chime generator
│   ├── App.jsx                            # Main application layout
│   └── index.css                          # Tailwind CSS & celebration styles
├── vercel.json                            # Vercel deployment configuration
├── netlify.toml                           # Netlify deployment configuration
├── package.json
└── vite.config.js
```

---

## 🚀 Step 1: Run Locally in VS Code

### Prerequisites:
- [Node.js](https://nodejs.org/) installed (v18 or newer).

### Commands:
1. Open this project folder in **VS Code**:
   ```bash
   cd "freshers mysore'"
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```
   *(or the port displayed in your terminal)*

---

## 🎨 Step 2: How to Replace the Flyer (When Ready)

You **do not** need to edit components or redesign anything. Everything is controlled in one simple file:

### If your flyer is an IMAGE (JPG, PNG, WEBP):
1. Copy your flyer image into the `public/assets/` folder and name it:
   `public/assets/fresher-flyer.png` (or `.jpg`).
2. Open [`src/config/eventConfig.js`](file:///C:/Users/Hp/Desktop/freshers%20mysore'/src/config/eventConfig.js) and update the `flyer` object:
   ```javascript
   flyer: {
     enabled: true,                       // <-- Turn this to true
     type: 'image',                       // <-- Set to 'image'
     src: '/assets/fresher-flyer.png',    // <-- Your image path
     title: 'Official Freshers Welcome Celebration Flyer 2026',
     downloadFileName: 'Freshers-2026-Flyer.png',
   }
   ```

### If your flyer is a PDF:
1. Copy your flyer PDF into the `public/assets/` folder and name it:
   `public/assets/fresher-flyer.pdf`.
2. Open [`src/config/eventConfig.js`](file:///C:/Users/Hp/Desktop/freshers%20mysore'/src/config/eventConfig.js) and update:
   ```javascript
   flyer: {
     enabled: true,                       // <-- Turn this to true
     type: 'pdf',                         // <-- Set to 'pdf'
     src: '/assets/fresher-flyer.pdf',    // <-- Your PDF path
     title: 'Official Freshers Welcome Celebration Flyer 2026',
     downloadFileName: 'Freshers-2026-Flyer.pdf',
   }
   ```

3. Save the file. The website immediately displays your official flyer with zoom and download capabilities!

---

## 🌐 Step 3: Deployment (Free Hosting)

Deploy the site to get your public live URL before printing QR codes on posters.

### Option A: Deploy to Vercel (Recommended – 2 Minutes)
1. Install Vercel CLI (or connect via GitHub):
   ```bash
   npm i -g vercel
   vercel
   ```
   *Follow the prompts (accept defaults).*
2. When deployment finishes, Vercel gives you a public live URL (e.g. `https://freshers-2026.vercel.app`).
3. To deploy production changes:
   ```bash
   vercel --prod
   ```

### Option B: Deploy to Netlify (Drag & Drop or CLI)
1. Run the build command:
   ```bash
   npm run build
   ```
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist/` folder.
4. Netlify will deploy your site instantly with an SSL-secured live URL!

---

## 📱 Step 4: Generate the Final QR Code for Posters

Once your website is deployed:
1. Open your live website on any browser.
2. Click the **"Scan / Print QR"** button in the navbar or hero section.
3. The QR generator will automatically detect the live URL.
4. Click:
   - **Download High-Res PNG (1024x1024)** for digital invitations, WhatsApp statuses, and flyers.
   - **Download Vector SVG** for flex printing, large banners, and physical posters.
   - **Print Invitation Pass** to print physical cards with the gold border and the caption:
     **"SCAN TO ENTER THE CELEBRATION!"**
5. Test scanning the QR code using any smartphone camera to verify it opens the welcome page directly!

---

## 🛠️ Customizing Event Details

In [`src/config/eventConfig.js`](file:///C:/Users/Hp/Desktop/freshers%20mysore'/src/config/eventConfig.js), you can update:
- `collegeName`: e.g. "Department of Computer Science & Engineering"
- `eventDetails.eventDate`: Set to `"2026-11-25T10:00:00"` to activate the countdown timer, or leave `null` to show the "Announcing Soon" teaser card.
- `eventDetails.venueDisplay`: Update the auditorium/hall name.
- `eventDetails.timeDisplay`: Update party timings.

---

Made with ❤️ by your Seniors for the Freshers Celebration 2026!
