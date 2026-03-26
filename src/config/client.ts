export const client = {
  // Business Details
  name: "The Creative Gardener",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Aylesbury.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07715 120895",
  email: "",
  website: "",

  // Location
  address: "Aylesbury",
  city: "Aylesbury",
  county: "",
  postcode: "",
  basedIn: "Aylesbury",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "6",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Tracey Thomas", rating: 5, text: "Had The Creative Gardener do our front and back gardens. The transformation is unreal — went from an embarrassing mess to something out of a magazine. The guys were polite, hardworking, and incredibly skilled.", date: "3 years ago" },
    { name: "Alison M.", rating: 5, text: "Cannot recommend The Creative Gardener highly enough. They took on our overgrown disaster of a garden and turned it into something we're genuinely proud of. Fair pricing, honest advice, and brilliant craftsmanship throughout.", date: "3 months ago" },
    { name: "Jackie T.", rating: 5, text: "Really impressed with The Creative Gardener. They came out, assessed what we needed, gave us honest advice about what would work best, and then delivered a fantastic result. No hard sell, just good honest work.", date: "2 months ago" },
    { name: "Claire Young", rating: 5, text: "Just had The Creative Gardener finish our garden project in Aylesbury. What a difference! The team were lovely to have around — respectful of our property, cleaned up after themselves, and produced an amazing result.", date: "a month ago" },
    { name: "Owen C.", rating: 5, text: "After getting several quotes, we went with The Creative Gardener and it was the best decision. Not the cheapest, but the quality of work is in a different league. Professional, reliable, and the results are gorgeous.", date: "6 months ago" },
    { name: "Zoe Bennett", rating: 5, text: "Top quality work from The Creative Gardener. They redesigned our outdoor space and it's now our favourite part of the house. The whole family spends so much more time outside now. Couldn't be happier.", date: "6 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "The Creative Gardener | Landscaper in Aylesbury",
    description: "Professional landscaper in Aylesbury. 5.0-star rated on Google. Call for a free quote.",
  },
};
