import { useParams, Link, Navigate } from 'react-router-dom';
import PageLayout, { ContactCard, Prose, SectionHeading, CTAButton, TwoColumn } from './PageLayout';
import { theme } from './theme';

type Product = {
  slug: string;
  name: string;
  price: string;
  per: string;
  tag: string;
  image: string;
  summary: string;
  includes: string[];
  pageTitle: string;
  description: string;
};

const PRODUCTS: Product[] = [
  {
    slug: 'one-day-hunt',
    name: 'One-day Hunt',
    price: '$325',
    per: 'per person / per day',
    tag: 'Entry',
    image: '/images/5_Georgia_Wild_Hog_Hunts_Georgia_Hog.png',
    pageTitle: 'One Day Hog & Deer Hunts with Guaranteed Success | Hog Wild USA',
    description: 'One Day Hog hunt for $325/day. 1 hog, no lodging. Guided hunt across 1000+ acres of Middle Georgia swamp and upland.',
    summary:
      "Our most popular day hunt. You'll spend a full day pursuing wild hogs across our 1000-acre property with an experienced guide. Includes stand placement and field-dressing assistance.",
    includes: [
      '1 Hog — no lodging',
      'Guided hunt with experienced guide',
      'Access to 1000+ acres',
      'Field dressing assistance',
      'Optional meals & lodging add-on',
      'Available year-round',
    ],
  },
  {
    slug: 'one-day-deer-hog-combo',
    name: 'One Day Deer/Hog Combo Hunt',
    price: '$375',
    per: 'per person / per day',
    tag: 'Combo',
    image: '/images/3_Trophy_Hunting_Georgia_Swamplands.png',
    pageTitle: 'Day Hunts: Hog & Deer Combo - Guaranteed Trophy Hog | Hog Wild USA',
    description: 'One Day Deer/Hog Combo Hunt — $375/day. 1 hog + 1 deer. No lodging. Book with Hog Wild USA in Middle Georgia.',
    summary:
      'The ultimate Georgia hunting experience. Pursue both wild hog and whitetail deer in the same day across diverse terrain — from pine forests to river swamps.',
    includes: [
      '1 Hog + 1 Deer (either sex in season)',
      'Expert combo guides',
      'All equipment available for rent',
      'Multiple stand locations',
      'In-season deer hunting (Oct 21 – Jan 14, 2026)',
    ],
  },
  {
    slug: '24-hour-hunt',
    name: 'One Day Hunt With Meals And Lodging',
    price: '$525',
    per: 'per person',
    tag: '24-Hour',
    image: '/images/8_Hunting_Lodge_Gopher_Plantation.png',
    pageTitle: 'Affordable One Day Hog & Deer Hunts w/ Lodging | Hog Wild USA',
    description: 'One Day Hunt w/ Meals & Lodging for $525/person. Delicious meals, overnight stay in the new lodge. Perfect for beginners.',
    summary:
      'A 24-hour hunt with lodging and meals included. Ideal for both experienced hunters and beginners who want the full experience without the full trip.',
    includes: [
      'One-day hunt for 1 hog (or combo $525)',
      'Overnight stay in our new lodge',
      '75" HD TV, DirectTV, Wi-Fi, modern kitchen, 2 full baths',
      'Delicious meals provided',
      'Ideal for experienced hunters and beginners alike',
    ],
  },
  {
    slug: 'one-day-guaranteed-meat-hog-hunt',
    name: 'One Day Guaranteed Meat Hog Hunt',
    price: '$550',
    per: 'per person',
    tag: 'Guaranteed',
    image: '/images/1_Diehard_Hog_Hunter_Takes_a_Giant.png',
    pageTitle: 'Affordable One Day Hog & Deer Combo Hunts - Guaranteed | Hog Wild USA',
    description: 'Guaranteed Meat Hog Hunt — $550/person. 100% guarantee for a hog up to 150 lb. Middle Georgia guided hunt.',
    summary:
      "When you want to leave with meat in the cooler. 100% guaranteed harvest of a hog up to 150 lb. We'll put you on the animal or you don't pay the guarantee.",
    includes: [
      '100% guaranteed harvest — hog up to 150 lb',
      'Guided hunt with experienced guide',
      'Field dressing assistance',
      'Access to 1000+ acres',
      'No lodging — meals & lodging add-on available',
    ],
  },
  {
    slug: 'one-day-guaranteed-trophy-hog-hunt',
    name: 'One Day Guaranteed Trophy Hog Hunt',
    price: '$650',
    per: 'per person',
    tag: 'Trophy',
    image: '/images/2_Diehard_Hog_Hunter_Takes_a_Giant.png',
    pageTitle: 'Unbeatable One Day Hog and Deer Hunts Starting at $325 | Hog Wild USA',
    description: 'Guaranteed Trophy Hog — $650/person. 100% guarantee for a Russian boar 200 lb & up. Hog Wild USA, Middle Georgia.',
    summary:
      'For the hunter chasing a true trophy. 100% guaranteed harvest of a hog 200 lb and up — direct descendants of the largest truly wild Russian boars, some weighing 350+ lb.',
    includes: [
      '100% guaranteed harvest — hog 200 lb+',
      'Russian boar — trophy-size',
      'Expert guide with knowledge of every stand',
      'Access to 1000+ acres of prime habitat',
      'Field dressing assistance',
    ],
  },
  {
    slug: '3-day-skinny-package',
    name: '3-Day "Skinny Package"',
    price: '$1,295',
    per: 'per hunter',
    tag: '3-Day',
    image: '/images/6_Hog_Hunting_Gopher_Plantation.png',
    pageTitle: 'Experience Deer & Hog Hunting with Modern Lodge Stay | Hog Wild USA',
    description: '3-Day Skinny Package — $1,295/hunter. 2 hogs + 1 deer, 3 nights lodging. Bring your own meals or eat at nearby restaurants.',
    summary:
      "Three days in the woods, three nights in our brand-new lodge. You bring the groceries; we provide the kitchen, the guides, and the land.",
    includes: [
      '2 Hogs + 1 Deer Either Sex (Oct 21 – Jan 14, 2026)',
      '3 Nights lodging in our brand-new lodge',
      '75" HD TV, DirectTV, Wi-Fi, modern kitchen, 2 full baths',
      'NO meals — kitchen provided (restaurants &lt; 10 min)',
      'Clean your own game (or $75/animal if we do it)',
      'Guide gratuities included',
      'Ice for your meat coolers',
    ],
  },
  {
    slug: '3-day-all-in-package',
    name: '3-Day "ALL IN" Package',
    price: '$1,495',
    per: 'per hunter',
    tag: 'Most Popular',
    image: '/images/4_HOG_WILD_USA_Updated_April_2026_10.png',
    pageTitle: 'Deluxe Hunting Experience (Deer & Hogs) in our New Lodge | Hog Wild USA',
    description: '3-Day ALL IN Package — $1,495/hunter. 2 hogs + 1 deer, 3 nights lodging, all meals, beverages, cleaning, tips, ice.',
    summary:
      "Our complete hunting getaway. Arrive, hunt, eat, sleep, repeat. Just bring your weapon and your hunting license — we handle everything else.",
    includes: [
      '2 Hogs + 1 Deer Either Sex (Oct 21 – Jan 14, 2026)',
      '3 Nights lodging in our brand-new lodge',
      '75" HD TV, DirectTV, Wi-Fi, modern kitchen, 2 full baths',
      '3 meals a day — cooked onsite',
      'Snacks (including for your day packs), bottled water, non-alcoholic beverages',
      'ALL animal cleaning included',
      'Guide gratuities included',
      'Ice for your meat coolers',
      'Just bring your weapon & hunting license',
    ],
  },
];

export const PRODUCT_LIST = PRODUCTS;

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/book-a-hunt" replace />;

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <PageLayout
      pageTitle={product.pageTitle}
      pageDescription={product.description}
      eyebrow={product.tag}
      title={product.name}
      heroImage={product.image}
    >
      <TwoColumn>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '24px' }}>
            <p style={{ fontFamily: theme.serif, fontSize: '56px', fontWeight: 500, color: theme.textDark, margin: 0, lineHeight: 1 }}>
              From: {product.price}
            </p>
            <span style={{ fontFamily: theme.sans, fontSize: '12px', color: theme.textDarkMuted, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              {product.per}
            </span>
          </div>

          <p style={{ fontFamily: theme.sans, fontSize: '13px', color: theme.accent, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 40px' }}>
            Pay a 50% deposit to secure your date
          </p>

          <Prose>
            <p>{product.summary}</p>
          </Prose>

          <div style={{ marginTop: '48px' }}>
            <SectionHeading title="What's Included" />
            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', fontFamily: theme.sans, fontSize: '15px', lineHeight: 2, color: theme.textDark }}>
              {product.includes.map((line) => (
                <li key={line} style={{ borderBottom: `1px solid ${theme.borderDark}`, padding: '12px 0' }}>
                  <span style={{ color: theme.accent, marginRight: '12px' }}>✓</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <CTAButton href="tel:478-256-3448">Call to Book — 478.256.3448</CTAButton>
            <CTAButton href="/book-a-hunt" variant="outline">See All Packages</CTAButton>
          </div>

          <div style={{ marginTop: '80px' }}>
            <SectionHeading eyebrow="Other Packages" title="Related Hunts" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '32px' }}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/products/${r.slug}`}
                  style={{
                    padding: '24px',
                    backgroundColor: theme.bgLightAlt,
                    textDecoration: 'none',
                    color: theme.textDark,
                    borderLeft: `2px solid ${theme.accent}`,
                    transition: 'transform 0.3s ease, background 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e0d7bf'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = theme.bgLightAlt; }}
                >
                  <p style={{ fontFamily: theme.sans, fontSize: '10px', color: theme.accent, letterSpacing: '2px', margin: 0, textTransform: 'uppercase' }}>
                    {r.tag}
                  </p>
                  <p style={{ fontFamily: theme.serif, fontSize: '19px', fontWeight: 500, margin: '8px 0 6px', color: theme.textDark, lineHeight: 1.25 }}>
                    {r.name}
                  </p>
                  <p style={{ fontFamily: theme.sans, fontSize: '14px', color: theme.accent, fontWeight: 600, margin: 0 }}>
                    From: {r.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <ContactCard />
      </TwoColumn>
    </PageLayout>
  );
}
