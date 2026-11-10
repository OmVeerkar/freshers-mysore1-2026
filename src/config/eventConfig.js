/**
 * ==============================================================================
 * FRESHERS WELCOME 2026 - MASTER CONFIGURATION
 * ==============================================================================
 * Seniors can easily update event details, flyers, links, and dates here
 * without modifying any component code.
 */

export const eventConfig = {
  // College & Celebration Branding
  collegeName: "College of Engineering & Technology",
  celebrationTitle: "FRESHERS CELEBRATION 2026",
  batchTitle: "Class of 2026 - 2030",
  tagline: "NEW BEGINNINGS, ENDLESS MEMORIES – TOGETHER WE MAKE COLLEGE HISTORY!",

  // Welcome Messages (Master prompt text preserved exactly)
  welcomeHeadline: "A GRAND WELCOME TO OUR NEWEST STARS!",
  welcomeParagraphs: [
    "Dear Juniors,",
    "A new journey, new friendships, exciting opportunities, and countless memories are waiting for you!",
    "College life is not just about books and classrooms; it's about laughter, fun, learning, adventures, and friendships that last a lifetime.",
    "We, your seniors, are truly happy to welcome you into our college family.",
    "Get ready for an unforgettable celebration filled with music, fun, excitement, and memories that will stay with you forever!"
  ],
  slogan: "NEW BEGINNINGS, ENDLESS MEMORIES – TOGETHER WE MAKE COLLEGE HISTORY!",
  signature: "WITH LOVE, YOUR SENIORS ❤️",

  // ---------------------------------------------------------------------------
  // FLYER CONFIGURATION
  // ---------------------------------------------------------------------------
  // When your official flyer is ready:
  // 1. Copy your flyer file into the "public/assets" folder:
  //    - e.g. public/assets/fresher-flyer.png  OR  public/assets/fresher-flyer.pdf
  // 2. Change "enabled: true" below
  // 3. Set "type" to 'image' or 'pdf'
  // 4. Update "src" to match your file path
  // ---------------------------------------------------------------------------
  flyer: {
    enabled: false, // Set to true when your official flyer is ready!
    type: 'image', // 'image' or 'pdf'
    src: '/assets/fresher-flyer.png', // Or '/assets/fresher-flyer.pdf'
    title: 'Official Freshers Welcome Celebration Flyer 2026',
    downloadFileName: 'Freshers-2026-Celebration-Flyer.png',
    placeholderMessage: 'THE OFFICIAL FRESHERS FLYER IS COMING SOON!',
    placeholderDescription: 'Our design committee is putting the final golden touches on the official schedule, dress code, VIP line-up, and celebration details.',
  },

  // ---------------------------------------------------------------------------
  // EVENT SCHEDULE & VENUE (Placeholder / Editable)
  // ---------------------------------------------------------------------------
  eventDetails: {
    // If you have a confirmed date, set eventDate (format: "YYYY-MM-DDTHH:MM:SS")
    // If not decided yet, leave eventDate as null to show the "Announcing Soon" teaser
    eventDate: null, // e.g. "2026-12-15T10:00:00"
    dateDisplay: "Announcement Coming Soon",
    timeDisplay: "To Be Announced",
    venueDisplay: "Main College Auditorium & Grand Lawn",
    dressCode: "Smart Casuals / Party Glamour (Details in Flyer)",
    entryRequirement: "Valid College Junior ID Card",
  },

  // ---------------------------------------------------------------------------
  // LIVE DEPLOYMENT & QR CODE
  // ---------------------------------------------------------------------------
  // Leave empty ("") during local development; the website will automatically
  // use the browser's current address (e.g. your live Vercel / Netlify URL).
  // Once deployed, you can either let it auto-detect or lock in your custom domain here.
  productionUrl: "", 

  // Social & Share text
  share: {
    title: "🎉 Freshers Welcome 2026 - You're Invited!",
    text: "Dear Juniors, you are warmly invited to the Grand Freshers Celebration 2026! Check out the flyer and invitation here:",
  },

  // Audio / Music settings
  audio: {
    title: "Celebration Ambient Theme",
    artist: "Freshers Welcome Soundtrack",
    // You can optionally drop an mp3 file at /assets/celebration-audio.mp3
    // If no custom file is found, the built-in procedural Web Audio synthesizer plays!
    customAudioSrc: "/assets/celebration-audio.mp3",
  }
};
