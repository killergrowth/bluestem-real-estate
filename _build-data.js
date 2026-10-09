'use strict';
/**
 * _build-data.js — Bluestem Real Estate and Land
 * Source: onboarding form (2026-09-27) + client Drive brand kit (Colors and Fonts.pdf, Logo Kit)
 * PKG001 "The Spark" — manual build per Tyler B, 2026-10-09
 */

const CLIENT = {
  name:          'Bluestem Real Estate and Land',
  nameShort:     'Bluestem',
  tagline:       'Homes. Land. Opportunity.',
  subTagline:    'We Don&rsquo;t Just List Property. We Build a Strategy to Sell It.',
  phone:         '(316) 213-9678',
  phoneTel:      '3162139678',
  email:         'danny@bluestemreal.com',
  founderName:   'Danny Bullock',
  founderTitle:  'Owner / Broker',
  serviceArea:   'Kansas &mdash; primarily southcentral Kansas',
  whatTheyDo:    'Real estate brokerage',
  services:      'Residential and land sales',
  idealCustomer: 'Home buyers, investors, and recreational land seekers',
  differentiators: '30 years of professional sales and personal real estate investing experience',
  // Domain not yet finalized — registrar is Cloudflare, no existing site.
  domain:        '',
  primaryColor:   '#103b27', // dark green
  secondaryColor: '#c3953b', // gold
  accentColor:    '#f8f4e8', // cream
  headingFont:   "'Playfair Display', serif",
  bodyFont:      "'Montserrat', sans-serif",
  // Reviews/testimonials: NONE provided on onboarding form. Do not fabricate.
  reviewsUrl:    '',
  manualReviews: '',
};

// No reviews provided — per SOP, ship with no reviews section rather than fabricate.
const REVIEWS = [];

// Three-pillar service structure per Danny's design inspiration (Client-Design-Suggestion.png)
const SERVICE_PILLARS = [
  {
    slug: 'residential',
    name: 'Residential',
    shortDesc: 'Buying or selling a home in southcentral Kansas &mdash; from first walkthrough to closing day.',
    icon: '&#127968;',
    intro: 'Residential real estate in southcentral Kansas moves on local knowledge &mdash; school districts, lot history, what a house actually sells for versus what it&rsquo;s listed for. Danny Bullock brings 30 years of sales experience and personal real estate investing to every residential transaction, whether you&rsquo;re buying your first home or selling the one you raised a family in.',
    faqs: [
      { q: 'How long does it typically take to sell a home in southcentral Kansas?', a: 'Timeline depends on price point, condition, and season, but a well-positioned home in this market typically sees serious showings within the first two to three weeks of listing. Pricing strategy at listing has the single biggest impact on how fast a home moves.' },
      { q: 'What should I do before listing my home?', a: 'Start with a walkthrough to identify what buyers will notice first &mdash; deferred maintenance, curb appeal, and decluttering matter more than renovations. Danny will walk the property with you and give specific, honest feedback before you spend money on anything.' },
      { q: 'Do you work with first-time home buyers?', a: 'Yes. First-time buyers get the same process as any other client &mdash; a clear walk through financing, what to look for in an inspection, and an honest read on whether a property is a good investment, not just a good-looking listing.' },
      { q: 'How do you determine a home&rsquo;s listing price?', a: 'Comparable sales in the immediate area, current inventory levels, and condition relative to those comps. Danny also factors in his own investing background &mdash; what an investor would be willing to pay matters even for owner-occupant listings.' },
      { q: 'Can you help if I&rsquo;m relocating to or from southcentral Kansas?', a: 'Yes &mdash; relocation timing (buying before selling, or selling before buying) is one of the most common situations Danny works through with clients. The right sequence depends on your financing and timeline, and that gets worked out early.' },
    ],
  },
  {
    slug: 'land-ranch',
    name: 'Land & Ranch',
    shortDesc: 'Recreational land, row crop ground, and ranch property across the region.',
    icon: '&#127806;',
    intro: 'Land is not priced or marketed like a house. Soil quality, water rights, mineral rights, easements, and recreational value all factor into what a parcel is actually worth. Danny&rsquo;s personal background in real estate investing means land deals get evaluated the way an investor would evaluate them &mdash; not just listed and hoped for.',
    faqs: [
      { q: 'What factors affect the value of recreational or farm land in Kansas?', a: 'Soil type and tillable acreage, water access, road frontage, mineral rights status, existing easements, and proximity to towns all affect value. Recreational land is also valued on hunting quality, timber, and topography.' },
      { q: 'Do you handle both tillable farmland and recreational land?', a: 'Yes &mdash; row crop ground, pasture, hunting and recreational tracts, and transitional land near town are all handled, each marketed to the buyer pool that actually wants that type of property.' },
      { q: 'How is land marketed differently than a house?', a: 'Land buyers are a smaller, more specific pool &mdash; investors, neighboring landowners, hunters, and recreational buyers. Marketing targets those buyers directly rather than general home-search traffic.' },
      { q: 'Can you help buyers identify good investment land?', a: 'Yes. Land analysis covers more than price per acre &mdash; it includes what the ground is actually suited for, what it could be used for, and realistic resale or income potential.' },
      { q: 'Do you handle ranch and larger acreage sales?', a: 'Yes, ranch and larger acreage transactions are part of the land and ranch practice, including properties with existing improvements, fencing, and water infrastructure.' },
    ],
  },
  {
    slug: 'commercial',
    name: 'Commercial',
    shortDesc: 'Commercial property sales for investors and business owners in the region.',
    icon: '&#127970;',
    intro: 'Commercial transactions require a different read than residential &mdash; income potential, zoning, traffic counts, and how a space compares to what else is available in the market. Danny applies the same investor&rsquo;s eye to commercial property that he brings to land and residential deals.',
    faqs: [
      { q: 'What types of commercial property do you work with?', a: 'Commercial listings are evaluated case by case &mdash; retail, office, and small commercial buildings in southcentral Kansas. Reach out directly with the property type and Danny will tell you honestly whether it&rsquo;s a fit.' },
      { q: 'Do you work with investors looking to buy commercial property?', a: 'Yes &mdash; investor clients get a straightforward read on income potential, condition, and realistic valuation, informed by Danny&rsquo;s own investing background rather than just comparable sales.' },
      { q: 'How is commercial property valued differently than residential?', a: 'Commercial valuation leans heavily on income potential, lease terms (if tenant-occupied), and comparable cap rates in the market, in addition to physical condition and location.' },
    ],
  },
];

// "The Bluestem Difference" — 4-step process from client design inspiration (Position, Present, Promote, Negotiate)
const PROCESS_STEPS = [
  { num: 1, title: 'Position', desc: 'Every property is priced and prepared based on real comparable data and 30 years of market experience &mdash; not guesswork.' },
  { num: 2, title: 'Present', desc: 'Listings are presented the way serious buyers actually evaluate property &mdash; honest condition, clear photos, and real context.' },
  { num: 3, title: 'Promote', desc: 'Marketing reaches the buyer pool that actually wants that property type, whether that&rsquo;s a family, an investor, or a recreational land buyer.' },
  { num: 4, title: 'Negotiate', desc: 'Danny negotiates from an investor&rsquo;s perspective on every deal &mdash; residential, land, or commercial &mdash; to protect your bottom line.' },
];

// No fabricated stats. Only verified facts from the onboarding form are used.
const TRUST_SIGNALS = [
  { label: '30 Years', sub: 'Professional Sales Experience' },
  { label: 'Investor-Owner', sub: 'Personal Real Estate Investing Background' },
  { label: '3 Practice Areas', sub: 'Residential, Land & Ranch, Commercial' },
];

module.exports = {
  CLIENT,
  REVIEWS,
  SERVICE_PILLARS,
  PROCESS_STEPS,
  TRUST_SIGNALS,
};
