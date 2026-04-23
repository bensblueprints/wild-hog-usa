import { Link } from 'react-router-dom';
import PageLayout, { Prose, SectionHeading, CTAButton, ContactCard, TwoColumn } from './PageLayout';
import { theme } from './theme';

const PACKAGES = [
  { slug: 'one-day-hunt', name: 'One-day Hunt', price: '$325', per: 'per person', tag: 'Entry', highlights: ['1 Hog, no lodging', 'Guided hunt', 'Field dressing assistance'] },
  { slug: 'one-day-deer-hog-combo', name: 'One Day Deer/Hog Combo', price: '$375', per: 'per person', tag: 'Combo', highlights: ['1 Hog + 1 Deer', 'In-season deer hunting', 'No lodging'] },
  { slug: '24-hour-hunt', name: 'One Day w/ Meals & Lodging', price: '$525', per: 'per person', tag: '24-Hour', highlights: ['Meals provided', 'One night lodging', 'Ideal for beginners'] },
  { slug: 'one-day-guaranteed-meat-hog-hunt', name: 'One Day Guaranteed Meat Hog', price: '$550', per: 'per person', tag: 'Guaranteed', highlights: ['100% guarantee, hog up to 150#', 'Guided hunt', 'Field dressing assistance'] },
  { slug: 'one-day-guaranteed-trophy-hog-hunt', name: 'One Day Guaranteed Trophy Hog', price: '$650', per: 'per person', tag: 'Trophy', highlights: ['100% guarantee, hog 200# & up', 'Guided hunt', 'Trophy-size Russian boar'] },
  { slug: '3-day-skinny-package', name: '3-Day "Skinny Package"', price: '$1,295', per: 'per hunter', tag: '3-Day', highlights: ['2 Hogs + 1 Deer', '3 Nights in new lodge', 'Kitchen provided — no meals', 'Guide gratuities included'] },
  { slug: '3-day-all-in-package', name: '3-Day "ALL IN" Package', price: '$1,495', per: 'per hunter', tag: 'Most Popular', highlights: ['2 Hogs + 1 Deer', '3 Nights in new lodge', '3 meals/day + snacks + beverages', 'All animal cleaning included', 'Ice + guide gratuities included'] },
];

export default function BookAHunt() {
  return (
    <PageLayout
      pageTitle="Book a Hog Hunting Trip Georgia – Hog Wild USA"
      pageDescription="Book your 2026 Georgia wild hog hunt. 7 packages starting at $325/day. 50% deposit secures your date. Call 478.256.3448 or fill out the form."
      eyebrow="Reserve Your Dates"
      title="Book Your Next Hunt"
      heroImage="/images/1_Diehard_Hog_Hunter_Takes_a_Giant.png"
    >
      <TwoColumn>
        <div>
          <Prose>
            <p>We have limited availability for hunts in the 2026 upcoming Georgia hog hunting season. A <strong>50% deposit</strong> is needed to secure your hunt dates.</p>
            <p>If you are interested in booking a hunt, call <strong>478.256.3448</strong> or use the form at the bottom of this page and we'll send you a secure online invoice for the deposit. Upon payment, you'll receive a confirmation email with all the details you need for your upcoming hunt.</p>
          </Prose>

          <div style={{ marginTop: '72px' }}>
            <SectionHeading eyebrow="2026 Packages" title="Choose Your Hunt" />
            <div style={{ display: 'grid', gap: '16px', marginTop: '40px' }}>
              {PACKAGES.map((pkg) => (
                <Link
                  key={pkg.slug}
                  to={`/products/${pkg.slug}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) auto',
                    gap: '32px',
                    alignItems: 'center',
                    padding: '28px 32px',
                    backgroundColor: theme.bgLightAlt,
                    borderLeft: `3px solid ${theme.accent}`,
                    textDecoration: 'none',
                    color: theme.textDark,
                    transition: 'transform 0.3s ease, background 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.backgroundColor = '#e0d7bf';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.backgroundColor = theme.bgLightAlt;
                  }}
                >
                  <div>
                    <p style={{ fontFamily: theme.sans, fontSize: '10px', fontWeight: 600, letterSpacing: '2px', color: theme.accent, margin: 0, textTransform: 'uppercase' }}>
                      {pkg.tag}
                    </p>
                    <h3 style={{ fontFamily: theme.serif, fontSize: '26px', fontWeight: 500, margin: '8px 0 10px', color: theme.textDark }}>
                      {pkg.name}
                    </h3>
                    <ul style={{ fontFamily: theme.sans, fontSize: '13px', color: theme.textDarkMuted, margin: 0, padding: 0, listStyle: 'none', lineHeight: 1.8 }}>
                      {pkg.highlights.map((h) => <li key={h}>— {h}</li>)}
                    </ul>
                  </div>
                  <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <p style={{ fontFamily: theme.serif, fontSize: '40px', fontWeight: 500, color: theme.textDark, margin: 0, lineHeight: 1 }}>
                      {pkg.price}
                    </p>
                    <p style={{ fontFamily: theme.sans, fontSize: '11px', color: theme.textDarkMuted, margin: '8px 0 0', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      {pkg.per}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '80px' }}>
            <SectionHeading eyebrow="What's Included" title="3-Day Package Details" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '40px' }}>
              <div style={{ padding: '36px', backgroundColor: theme.bg, color: theme.text }}>
                <p style={{ fontFamily: theme.sans, fontSize: '10px', letterSpacing: '2px', color: theme.accent, margin: 0, textTransform: 'uppercase' }}>Skinny</p>
                <h4 style={{ fontFamily: theme.serif, fontSize: '28px', margin: '12px 0 24px', fontWeight: 500 }}>$1,295 / hunter</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: theme.sans, fontSize: '14px', lineHeight: 2, color: theme.textMuted }}>
                  <li>• 2 Hogs + 1 Deer Either Sex (Oct 21 – Jan 14, 2026)</li>
                  <li>• 3 Nights in our brand-new lodge</li>
                  <li>• 75" HD TV, DirectTV, Wi-Fi, modern kitchen, 2 full baths</li>
                  <li>• NO meals — kitchen provided, restaurants &lt; 10 min</li>
                  <li>• Clean your own game ($75/animal if we do it)</li>
                  <li>• Guide gratuities included</li>
                  <li>• Ice for your coolers</li>
                </ul>
              </div>
              <div style={{ padding: '36px', backgroundColor: theme.accent, color: theme.bg }}>
                <p style={{ fontFamily: theme.sans, fontSize: '10px', letterSpacing: '2px', color: theme.bg, margin: 0, textTransform: 'uppercase' }}>Most Popular</p>
                <h4 style={{ fontFamily: theme.serif, fontSize: '28px', margin: '12px 0 24px', fontWeight: 500 }}>$1,495 / hunter</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: theme.sans, fontSize: '14px', lineHeight: 2, color: theme.bg }}>
                  <li>• 2 Hogs + 1 Deer Either Sex</li>
                  <li>• 3 Nights in our brand-new lodge</li>
                  <li>• 3 meals a day — cooked onsite</li>
                  <li>• Snacks for your day packs + bottled water + non-alcoholic beverages</li>
                  <li>• ALL animal cleaning included</li>
                  <li>• Guide gratuities included</li>
                  <li>• Ice for your meat coolers</li>
                  <li>• Just bring your weapon & hunting license</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '80px', padding: '48px', backgroundColor: theme.bgLightAlt }}>
            <SectionHeading eyebrow="Request Info" title="Send a Booking Inquiry" />
            <form
              action="mailto:tomhaskins@hogwildusa.com"
              method="POST"
              encType="text/plain"
              style={{ display: 'grid', gap: '20px', maxWidth: '640px', marginTop: '24px' }}
            >
              <label style={{ fontFamily: theme.sans, fontSize: '12px', fontWeight: 600, color: theme.textDark, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Your Name
                <input name="name" required style={inputStyle} />
              </label>
              <label style={{ fontFamily: theme.sans, fontSize: '12px', fontWeight: 600, color: theme.textDark, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Phone
                <input name="phone" type="tel" required style={inputStyle} />
              </label>
              <label style={{ fontFamily: theme.sans, fontSize: '12px', fontWeight: 600, color: theme.textDark, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Email
                <input name="email" type="email" required style={inputStyle} />
              </label>
              <label style={{ fontFamily: theme.sans, fontSize: '12px', fontWeight: 600, color: theme.textDark, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Message — Which package, how many hunters, preferred dates
                <textarea name="message" rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
              </label>
              <div>
                <CTAButton href="mailto:tomhaskins@hogwildusa.com">Submit</CTAButton>
              </div>
            </form>
            <p style={{ fontFamily: theme.sans, fontSize: '13px', color: theme.textDarkMuted, marginTop: '24px' }}>
              Prefer to call? <a href="tel:478-256-3448" style={{ color: theme.accent, fontWeight: 600 }}>478.256.3448</a> — Tom Haskins, Hog Wild USA.
            </p>
          </div>
        </div>

        <ContactCard />
      </TwoColumn>
    </PageLayout>
  );
}

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  marginTop: '8px',
  padding: '14px 16px',
  border: `1px solid ${theme.borderDark}`,
  borderRadius: '2px',
  fontFamily: theme.sans,
  fontSize: '15px',
  backgroundColor: '#fff',
  color: theme.textDark,
};
