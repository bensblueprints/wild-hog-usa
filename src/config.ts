export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  target: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  videoPath: string
  eyebrow: string
  titleLine: string
  titleEmphasis: string
  subtitleLine1: string
  subtitleLine2: string
  ctaText: string
  ctaTargetId: string
  phoneCtaText: string
  phoneHref: string
}

export interface ManifestoConfig {
  sectionLabel: string
  text: string
}

export interface AnatomyPillar {
  label: string
  title: string
  body: string
}

export interface AnatomyConfig {
  sectionLabel: string
  title: string
  pillars: AnatomyPillar[]
}

export interface TierConfig {
  name: string
  price: string
  frequency: string
  journeys: string
  image: string
  description: string
  amenities: string[]
  ctaText: string
  ctaHref: string
}

export interface TiersConfig {
  sectionLabel: string
  title: string
  tiers: TierConfig[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: FooterLink[]
}

export interface FooterConfig {
  ageGateText: string
  brandName: string
  brandTaglineLines: string[]
  columns: FooterColumn[]
  copyright: string
  phoneCtaText: string
  phoneHref: string
  email: string
  emailHref: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Hog Wild USA | Georgia Wild Hog Hunting",
  siteDescription: "Georgia's premier wild hog hunting outfitter. 28+ years, 1000+ acres. Book your hunt today -- $325/day. Guided hunts, night hunts, and all-inclusive packages.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "Hog Wild USA",
  links: [
    { label: "Book a Hunt", target: "/book-a-hunt" },
    { label: "About Our Hunts", target: "/about-our-hunts" },
    { label: "Gallery", target: "/gallery" },
    { label: "Testimonials", target: "/testimonials" },
    { label: "Blog", target: "/blog" },
    { label: "Contact", target: "/contact-us" },
  ],
}

export const heroConfig: HeroConfig = {
  videoPath: "videos/hero.mp4",
  eyebrow: "Georgia's Premier Outfitter",
  titleLine: "Wild Hog",
  titleEmphasis: "Hunting Adventures",
  subtitleLine1: "$325/day -- 1000+ acres of prime Georgia swampland.",
  subtitleLine2: "28 years of putting hunters on trophy Russian boar.",
  ctaText: "Book Your Hunt",
  ctaTargetId: "#tiers",
  phoneCtaText: "Call 478-256-3448",
  phoneHref: "tel:478-256-3448",
}

export const manifestoConfig: ManifestoConfig = {
  sectionLabel: "Our Story",
  text: "For more than twenty-eight years, Hog Wild USA has guided hunters through the ancient swamplands of Middle Georgia. Here on the Ocmulgee River, where the Creek Indians once hunted, Russian wild boar roam across a thousand acres of fields, swamps, and upland territories. We believe every hunter deserves an experience worth remembering -- whether it's your first time in the stand or your fiftieth trophy.",
}

export const anatomyConfig: AnatomyConfig = {
  sectionLabel: "The Experience",
  title: "What Awaits in the Georgia Woods",
  pillars: [
    {
      label: "GUIDED HUNTS",
      title: "Expert Guides, Every Step",
      body: "First time hunting? Not a problem. All our hunts include an experienced guide who knows every stand, every trail, and every feeding pattern on our 1000+ acres. We accommodate groups up to 12, with both single and father-son combo stands available. Need gear? We rent rifles, shotguns, optics, and night-hunt mounted flashlights.",
    },
    {
      label: "THE LAND",
      title: "1000 Acres of Prime Habitat",
      body: "Our properties span fields, swamplands, and upland territories along the Ocmulgee River -- some of the best food plots in Middle Georgia. The land adjoins the Bond Swamp National Wildlife Refuge, creating an ecosystem where trophy-size Russian boar thrive. Whether you prefer still hunting from a stand or stalking through the swamp, we have the terrain for you.",
    },
    {
      label: "NIGHT HUNTS",
      title: "Thrilling Night Hunts with Green Light",
      body: "Experience the adrenaline of hunting Russian boar under the stars. Our night hunts use specialized green lights that don't spook the game -- legal in Georgia and extremely effective. If you've never hunted at night, let us show you why it's one of the most exciting experiences a hunter can have.",
    },
  ],
}

export const tiersConfig: TiersConfig = {
  sectionLabel: "Hunting Packages",
  title: "Choose Your Adventure",
  tiers: [
    {
      name: "Hogs Only Day Hunt",
      price: "325",
      frequency: "per person / per day",
      journeys: "DAY HUNT",
      image: "images/tier-01.jpg",
      description: "Our most popular day hunt. You'll spend a full day pursuing wild hogs across our 1000-acre property with an experienced guide. Includes stand placement, field dressing assistance, and access to all hunting areas. Meals and lodging available as add-ons.",
      amenities: [
        "Guided hunt with experienced guide",
        "Access to 1000+ acres",
        "Field dressing assistance",
        "Optional meals & lodging add-on",
        "Available year-round",
      ],
      ctaText: "Book This Hunt",
      ctaHref: "tel:478-256-3448",
    },
    {
      name: "Hog & Deer Combo",
      price: "375",
      frequency: "per person / per day",
      journeys: "COMBO HUNT",
      image: "images/tier-02.jpg",
      description: "The ultimate Georgia hunting experience. Pursue both wild hog and whitetail deer in the same day across diverse terrain -- from pine forests to river swamps. Our guides know where the deer bed and where the hogs feed, maximizing your opportunity.",
      amenities: [
        "Wild hog & whitetail deer",
        "Expert combo guides",
        "All equipment available for rent",
        "Multiple stand locations",
        "In-season deer hunting",
      ],
      ctaText: "Book This Hunt",
      ctaHref: "tel:478-256-3448",
    },
    {
      name: "2.5 Day & 3 Night Adventure",
      price: "1,495",
      frequency: "all-inclusive",
      journeys: "EXTENDED STAY",
      image: "images/7_Wild_Hog_Hunts_Trophy_Quest_Farms.png",
      description: "Our complete hunting getaway. Arrive, hunt, eat, sleep, repeat. This package includes 2.5 days of hunting, 3 nights in our new lodge, all meals, beverages, snacks, tips, skinning, cleaning fees, and ice for your game. Three thrilling night hunts included.",
      amenities: [
        "3 nights in our new lodge",
        "All meals & beverages included",
        "3 night hunts with green light",
        "Skinning, cleaning & ice included",
        "Tips & gratuities covered",
      ],
      ctaText: "Book This Hunt",
      ctaHref: "tel:478-256-3448",
    },
  ],
}

export const footerConfig: FooterConfig = {
  ageGateText: "Ready to Hunt? Call Us Today.",
  brandName: "HOG WILD USA",
  brandTaglineLines: [
    "2481 Old Marion Rd",
    "Dry Branch, GA 31020",
  ],
  columns: [
    {
      heading: "Navigate",
      links: [
        { label: "Home", href: "/" },
        { label: "Book a Hunt", href: "/book-a-hunt" },
        { label: "About Our Hunts", href: "/about-our-hunts" },
        { label: "Gallery", href: "/gallery" },
        { label: "Testimonials", href: "/testimonials" },
      ],
    },
    {
      heading: "Hunt Info",
      links: [
        { label: "Wild Boar Hunting", href: "/wild-boar-hunting" },
        { label: "Guided Hog Hunts", href: "/guided-wild-hog-hunts" },
        { label: "Daily Hunt Report", href: "/daily-hunt-report" },
        { label: "Blog", href: "/blog" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      heading: "Follow Us",
      links: [
        { label: "Facebook", href: "https://www.facebook.com/hogwildusa1/" },
        { label: "Instagram", href: "https://www.instagram.com/hogwildusa/" },
      ],
    },
  ],
  copyright: "2026 Hog Wild USA | All Rights Reserved",
  phoneCtaText: "478-256-3448",
  phoneHref: "tel:478-256-3448",
  email: "tomhaskins@hogwildusa.com",
  emailHref: "mailto:tomhaskins@hogwildusa.com",
}
