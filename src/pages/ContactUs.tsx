import PageLayout, { SectionHeading, CTAButton } from './PageLayout';
import { theme } from './theme';

export default function ContactUs() {
  return (
    <PageLayout
      pageTitle="Contact – Georgia Wild Hog Hunting Outfitter | Hog Wild USA"
      pageDescription="Call 478.256.3448 or email tomhaskins@hogwildusa.com to book a guided wild hog hunt in Middle Georgia. 2481 Old Marion Rd, Dry Branch, GA."
      eyebrow="Ready to Book?"
      title="Contact Us"
      heroImage="/images/9_Hog_Hunting_Outfitters_Georgia_Guided.png"
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
        <div>
          <SectionHeading eyebrow="Get In Touch" title="Ready to Book a Hunt? Call Now." />

          <div style={{ marginTop: '24px' }}>
            <a
              href="tel:478-256-3448"
              style={{
                display: 'block',
                fontFamily: theme.serif,
                fontSize: '56px',
                fontWeight: 500,
                color: theme.accent,
                textDecoration: 'none',
                lineHeight: 1,
                marginBottom: '16px',
              }}
            >
              478.256.3448
            </a>
            <a
              href="mailto:tomhaskins@hogwildusa.com"
              style={{
                fontFamily: theme.sans,
                fontSize: '15px',
                color: theme.textDark,
                textDecoration: 'none',
                borderBottom: `1px solid ${theme.textDark}`,
              }}
            >
              tomhaskins@hogwildusa.com
            </a>
          </div>

          <div style={{ marginTop: '40px' }}>
            <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '2px', color: theme.accent, textTransform: 'uppercase', margin: 0 }}>
              Our Address
            </p>
            <p style={{ fontFamily: theme.serif, fontSize: '22px', fontWeight: 400, color: theme.textDark, margin: '8px 0 0', lineHeight: 1.4 }}>
              Hog Wild
              <br />
              2481 Old Marion Rd
              <br />
              Dry Branch, Georgia 31020
            </p>
          </div>

          <div style={{ marginTop: '40px', padding: '24px', backgroundColor: theme.bgLightAlt, borderLeft: `3px solid ${theme.accent}` }}>
            <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '2px', color: theme.accent, textTransform: 'uppercase', margin: 0 }}>
              Email Update
            </p>
            <p style={{ fontFamily: theme.sans, fontSize: '14px', color: theme.textDark, margin: '8px 0 0', lineHeight: 1.6 }}>
              Our email has been changed to <strong>tomhaskins@hogwildusa.com</strong>. We no longer have access to our bellsouth.net addresses. Please update your address book.
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <p style={{ fontFamily: theme.serif, fontSize: '22px', color: theme.textDark, margin: 0 }}>
              Our hunts start at <strong>$325.00 per day</strong>.
            </p>
            <ul style={{ marginTop: '16px', padding: 0, listStyle: 'none', fontFamily: theme.sans, fontSize: '15px', lineHeight: 1.8, color: theme.textDarkMuted }}>
              <li>• <strong>$325.00</strong> per person / per day — Hogs only (allowed 1)</li>
              <li>• <strong>$375.00</strong> per person / per day — Deer &amp; Hog Combo Hunt</li>
              <li>• <strong>$1,495</strong> — 2.5 day hunt with lodging, food, cleaning fees, and ice</li>
            </ul>
            <p style={{ fontFamily: theme.sans, fontSize: '13px', color: theme.textDarkMuted, lineHeight: 1.7, marginTop: '16px' }}>
              Georgia hunting laws now allow hunting legally over bait, year-round, including deer and turkey season. Our depredation permit allows us to hunt over bait legally, with 12-volt lights, and out of a vehicle — bag limits increase with these permits.
            </p>
            <p style={{ fontFamily: theme.sans, fontSize: '13px', fontWeight: 600, color: theme.accent, marginTop: '16px' }}>
              2026 Corporate Rates Available — Call for more info.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Get Directions" title="Find Us" />
          <div style={{ aspectRatio: '1 / 1', marginTop: '24px', overflow: 'hidden', backgroundColor: theme.bgLightAlt }}>
            <iframe
              title="Hog Wild USA location"
              src="https://maps.google.com/maps?cid=4128140218840872818&hl=en&output=embed"
              loading="lazy"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
            />
          </div>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <CTAButton href="tel:478-256-3448">Call Now</CTAButton>
            <CTAButton href="https://www.google.com/maps/dir/?api=1&destination=2481+Old+Marion+Rd,+Dry+Branch,+GA+31020" variant="outline">
              Get Directions
            </CTAButton>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
