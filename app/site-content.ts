/**
 * CENTRE DE CONTRÔLE DU SITE
 * Remplace uniquement les valeurs entre guillemets pour changer un lien,
 * un numéro, une vidéo ou un réseau social sans toucher au design.
 */
export const SITE_CONTENT = {
  contact: {
    email: "contact@jonasdiop.com",
    phoneDisplay: "+1 438 788-3646",
    phoneLink: "+14387883646",
  },
  links: {
    gameChangerCall: "https://cal.com/jonasdiopdm/the-gamechanger-call",
    swipeFile: "/cdt-scaling-swipe-file",
    shiftApplication: "/contact?route=shift",
    breakthroughApplication: "/contact?route=breakthrough",
    councilApplication: "/contact?route=council",
    speakingApplication: "https://tally.so/r/31A7lO",
    linkedin: "https://www.linkedin.com/in/jonasdiopdm/",
    instagram: "https://www.instagram.com/jonasdiopdm/",
    facebook: "https://www.facebook.com/JonasDiopDM/",
    youtube: "",
    maintenantOuJamais: "https://www.amazon.com/Maintenant-jamais-principes-lascension-conqu%C3%A9rant/dp/2981951203/",
    alphaLadders: "https://www.amazon.com/ALPHA-LADDERS-Captain-Destiny-Alphas/dp/1989536565/",
    mastermind: "https://www.amazon.com/MASTERMIND-ways-get-into-League-ebook/dp/B081X9G3LQ/",
  },
  videos: {
    homeVsl: "", // Exemple : https://www.youtube.com/embed/XXXXXXXXXXX
    speakingReel: "",
    shiftCaseStudy: "",
  },
} as const;

export const HERO_IMAGES: Record<string, string> = {
  "methodologie-cdt": "/section-bg/hero-cubes.webp",
  services: "/section-bg/ecosysteme-hero-pyramid.webp",
  "services/the-shift": "/media/red-chair-hero.png",
  "services/the-breakthrough": "/media/speaking-close.jpg",
  "services/the-dynasty-council": "/media/red-chair-centered.jpg",
  resultats: "/media/portrait-blue.jpg",
  "cdt-scaling-swipe-file": "/section-bg/hero-cubes.webp",
  "a-propos": "/media/portrait-blue.jpg",
  conferences: "/media/speaking-audience.jpg",
  ressources: "/section-bg/ressources-hero-archive.webp",
  livre: "/section-bg/livre-hero-tome.webp",
  podcast: "/section-bg/podcast-hero-booth.webp",
  outils: "/section-bg/outils-hero-sliderule.webp",
  evenements: "/section-bg/evenements-hero-amphitheater.webp",
  "evenements/bootcamps": "/section-bg/army-hero-katana.webp",
  faq: "/section-bg/ressources-hero-archive.webp",
  contact: "/section-bg/contact-hero-meeting.webp",
};
