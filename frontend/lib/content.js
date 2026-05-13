// Single source of truth. Preserves S&P Global's real divisions, value, IA.
// Recast in the "almanac of benchmarks" idiom: each division carries the
// benchmark it is famous for (its monument).

// Unsplash images (free license) — small, cropped, lazy-loaded. Duotone via CSS.
const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const HERO_IMG = img("1518186285589-2f7649de83e0", 1600); // glass towers / financial district

export const DIVISIONS = [
  {
    id: "ratings",
    no: "01",
    monument: "AAA",
    name: "Ratings",
    est: "Est. 1916",
    blurb:
      "The independent credit opinions that price risk for the global capital markets.",
    metric: "1M+ ratings outstanding",
    links: ["Credit Ratings", "Rating Actions", "Sector Research", "Methodologies"],
    img: img("1454165804606-c3d57bc86b40"), // documents / analysis desk
  },
  {
    id: "spdji",
    no: "02",
    monument: "500",
    name: "Dow Jones Indices",
    est: "Est. 1957",
    blurb:
      "The world's most-followed benchmarks — home of the S&P 500 and the DJIA.",
    metric: "$16T+ benchmarked",
    links: ["S&P 500", "Dow Jones Averages", "Index Methodology", "Custom Indices"],
    img: img("1611974789855-9c2a0a7236a3"), // trading screens / charts
  },
  {
    id: "mi",
    no: "03",
    monument: "∞",
    name: "Market Intelligence",
    est: "Multi-asset",
    blurb:
      "Data and analytics fused into the workflows where capital decisions are actually made.",
    metric: "135M+ data items daily",
    links: ["Capital Markets", "Private Markets", "Sustainability", "Data Feeds"],
    img: img("1551288049-bebda4e38f71"), // dashboards / data
  },
  {
    id: "commodity",
    no: "04",
    monument: "Brent",
    name: "Commodity Insights",
    est: "Est. 1909",
    blurb:
      "The reference prices the energy and commodity markets clear against.",
    metric: "Platts benchmarks",
    links: ["Energy Transition", "Oil & Gas", "Metals", "Agriculture"],
    img: img("1466611653911-95081537e5b7"), // energy infrastructure
  },
  {
    id: "mobility",
    no: "05",
    monument: "VIN",
    name: "Mobility",
    est: "Automotive",
    blurb:
      "The system of record for the world's automotive value chain.",
    metric: "Full lifecycle data",
    links: ["Automotive Insights", "Vehicle Data", "Aftermarket", "Fleet & Leasing"],
    img: img("1492144534655-ae79c964c9d7"), // automotive / mobility
  },
];

export const FIGURES_IMG = img("1480714378408-67cf0d13bc1b", 1400); // city skyline at dusk

export const TICKERS = [
  { sym: "S&P 500", val: "5,304.72", chg: "+0.74", up: true },
  { sym: "DJIA", val: "39,069.59", chg: "+0.01", up: true },
  { sym: "NASDAQ", val: "16,920.80", chg: "-0.30", up: false },
  { sym: "BRENT", val: "82.12", chg: "+1.18", up: true },
  { sym: "WTI", val: "77.91", chg: "+0.95", up: true },
  { sym: "10Y UST", val: "4.461", chg: "-0.02", up: false },
  { sym: "GOLD", val: "2,334.6", chg: "+0.41", up: true },
  { sym: "EUR/USD", val: "1.0824", chg: "+0.06", up: true },
  { sym: "VIX", val: "12.92", chg: "-2.41", up: false },
];

export const NAV = [
  { label: "Divisions", mega: true },
  { label: "Insights" },
  { label: "Benchmarks" },
  { label: "About" },
  { label: "Careers" },
];

export const INSIGHTS = [
  {
    no: "A",
    tag: "Credit Conditions",
    title: "Global financing conditions ease as rate-cut expectations firm",
    meta: "Ratings",
    read: "6 min",
    feature: true,
  },
  { no: "B", tag: "Energy Transition", title: "Power demand from data centers reshapes the load curve", meta: "Commodity Insights", read: "4 min" },
  { no: "C", tag: "Equities", title: "Concentration risk in the S&P 500: a structural read", meta: "Dow Jones Indices", read: "5 min" },
  { no: "D", tag: "Mobility", title: "EV adoption decelerates in mature markets", meta: "Mobility", read: "3 min" },
];

export const STATS = [
  { k: "1860", v: "Founded", note: "Henry Varnum Poor" },
  { k: "35", v: "Countries", note: "~40,000 people" },
  { k: "1M+", v: "Securities rated", note: "Active credit ratings" },
  { k: "$16T", v: "Indexed to S&P DJI", note: "Benchmarked assets" },
];

export const FOOTER = [
  { h: "Divisions", links: ["Market Intelligence", "Ratings", "Commodity Insights", "Mobility", "Dow Jones Indices"] },
  { h: "Company", links: ["About", "Leadership", "Newsroom", "Investor Relations", "Sustainability"] },
  { h: "Insights", links: ["Research", "Events", "Podcasts", "Topics", "Subscriptions"] },
  { h: "Connect", links: ["Contact Us", "Careers", "Offices", "Media Center", "Request a Demo"] },
];
