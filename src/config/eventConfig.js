/**
 * ==============================================================================
 * FRESHERS WELCOME 2026 - MASTER CONFIGURATION
 * ==============================================================================
 * Seniors can easily update event details, flyers, links, and dates here
 * without modifying any component code.
 */

export const eventConfig = {
  // College & Celebration Branding
  collegeName: "JSS CACS MYSURU",
  celebrationTitle: "FLORENZA FRESHERS PARTY 2026",
  batchTitle: "CLASS OF 2026",

  tagline: "Where Fresh Roots Begin to Soar",

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
  flyer: {
    enabled: true,
    type: 'image',
    src: '/assets/florenza-flyer.jpg',
    title: 'Florenza - Freshers Party 2026 Official Flyer',
    downloadFileName: 'Florenza-Freshers-Party-2026.jpg',
    placeholderMessage: 'FLORENZA OFFICIAL FRESHERS FLYER',
    placeholderDescription: 'Where Fresh Roots Begin to Soar • Join us at the Department of Botany.',
  },

  // ---------------------------------------------------------------------------
  // EVENT SCHEDULE & VENUE
  // ---------------------------------------------------------------------------
  eventDetails: {
    eventDate: "2026-11-21T10:00:00",
    dateDisplay: "November 21st, 2026",
    timeDisplay: "10:00 AM",
    venueDisplay: "Department of Botany",
    dressCode: "Festive & Elegant Florals / Smart Casuals",
    entryRequirement: "Valid College Junior ID Card",
  },

  // ---------------------------------------------------------------------------
  // LIVE DEPLOYMENT & QR CODE
  // ---------------------------------------------------------------------------
  productionUrl: "", 

  // Social & Share text
  share: {
    title: "🌸 Florenza Freshers Party 2026 - You're Invited!",
    text: "Dear Juniors, you are warmly invited to FLORENZA Freshers Party 2026 on November 21st at 10:00 AM at the Department of Botany! Check out the official flyer here:",
  },

  // Audio / Music settings
  audio: {
    title: "Celebration Ambient Theme",
    artist: "Freshers Welcome Soundtrack",
    customAudioSrc: "/assets/celebration-audio.mp3",
  }
};
