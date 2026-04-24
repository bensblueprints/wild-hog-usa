import { theme } from '../pages/theme';

export default function BookingCTA() {
  return (
    <section
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        padding: 'clamp(64px, 8vw, 96px) 24px',
        borderTop: `1px solid rgba(196,149,106,0.2)`,
      }}
    >
      <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: theme.sans,
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '3px',
            color: theme.accent,
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Plan Ahead
        </p>
        <h2
          style={{
            fontFamily: theme.serif,
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: theme.text,
            margin: '14px 0 24px',
            textWrap: 'balance',
          }}
        >
          Book Your 2026 Hog Hunting Trips Now
        </h2>
        <p
          style={{
            fontFamily: theme.sans,
            fontSize: '17px',
            lineHeight: 1.7,
            color: theme.textMuted,
            margin: '0 auto 12px',
            maxWidth: '680px',
          }}
        >
          Now is the time to book your 2026 hog hunting trip. Only <strong style={{ color: theme.text }}>$325 per person, per day</strong>, or <strong style={{ color: theme.text }}>$1,495 for 2.5 days and 3 nights</strong> of wild boar hunting — including lodging & food.
        </p>
        <p
          style={{
            fontFamily: theme.sans,
            fontSize: '15px',
            lineHeight: 1.7,
            color: theme.textMuted,
            margin: '0 auto 36px',
            maxWidth: '680px',
          }}
        >
          Gift Certificates are available in any amount, year-round. They never expire. Call us to purchase or to schedule your party's hunt anytime.
        </p>
        <div style={{ display: 'inline-flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="tel:478-256-3448"
            style={{
              display: 'inline-block',
              fontFamily: theme.sans,
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '16px 36px',
              borderRadius: '2px',
              backgroundColor: theme.accent,
              color: theme.bg,
            }}
          >
            Call 478.256.3448
          </a>
          <a
            href="/book-a-hunt"
            style={{
              display: 'inline-block',
              fontFamily: theme.sans,
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '16px 36px',
              borderRadius: '2px',
              border: `1px solid ${theme.accent}`,
              color: theme.accent,
              backgroundColor: 'transparent',
            }}
          >
            Book a Hunt
          </a>
        </div>
      </div>
    </section>
  );
}
