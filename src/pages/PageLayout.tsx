import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import BookingCTA from '../sections/BookingCTA';
import { theme } from './theme';

interface PageLayoutProps {
  title: string;
  eyebrow?: string;
  heroImage?: string;
  children: ReactNode;
  pageTitle?: string;
  pageDescription?: string;
}

export default function PageLayout({ title, eyebrow, heroImage, children, pageTitle, pageDescription }: PageLayoutProps) {
  useEffect(() => {
    if (pageTitle) document.title = pageTitle;
    if (pageDescription) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = pageDescription;
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pageTitle, pageDescription]);

  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: theme.bg, color: theme.text }}>
        {/* Page Hero */}
        <section
          className="page-hero"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            backgroundColor: theme.bg,
            backgroundImage: heroImage
              ? `linear-gradient(180deg, rgba(26,18,9,0.4) 0%, rgba(26,18,9,0.85) 100%), url(${heroImage})`
              : 'linear-gradient(180deg, #1a1209 0%, #231a0e 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            {eyebrow && (
              <p
                style={{
                  fontFamily: theme.sans,
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: theme.accent,
                  marginBottom: '20px',
                }}
              >
                {eyebrow}
              </p>
            )}
            <h1
              style={{
                fontFamily: theme.serif,
                fontSize: 'clamp(36px, 8vw, 92px)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: theme.text,
                margin: 0,
                textWrap: 'balance',
              }}
            >
              {title}
            </h1>
          </div>
        </section>

        {/* Page Body */}
        <section style={{ backgroundColor: theme.bgLight, color: theme.textDark }}>
          <div className="page-body" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {children}
          </div>
        </section>

        {/* Repeating booking CTA (on every page before footer, per source) */}
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}

// Reusable building blocks for page bodies
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: theme.sans,
        fontSize: '17px',
        lineHeight: 1.75,
        color: theme.textDark,
        maxWidth: '720px',
      }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      {eyebrow && (
        <p
          style={{
            fontFamily: theme.sans,
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: theme.accent,
            marginBottom: '12px',
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          fontFamily: theme.serif,
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          color: theme.textDark,
          margin: 0,
          textWrap: 'balance',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export function CTAButton({ href, children, variant = 'solid' }: { href: string; children: ReactNode; variant?: 'solid' | 'outline' }) {
  const solid = variant === 'solid';
  return (
    <a
      href={href}
      style={{
        display: 'inline-block',
        fontFamily: theme.sans,
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        padding: '16px 40px',
        borderRadius: '2px',
        backgroundColor: solid ? theme.accent : 'transparent',
        color: solid ? theme.bg : theme.accent,
        border: solid ? 'none' : `1px solid ${theme.accent}`,
        transition: 'all 0.4s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (solid) el.style.backgroundColor = theme.accentHover;
        else el.style.backgroundColor = 'rgba(196,149,106,0.08)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        if (solid) el.style.backgroundColor = theme.accent;
        else el.style.backgroundColor = 'transparent';
      }}
    >
      {children}
    </a>
  );
}

export function ContactCard() {
  return (
    <aside
      className="contact-card"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        padding: 'clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px)',
        borderRadius: '2px',
      }}
    >
      <p
        style={{
          fontFamily: theme.sans,
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: theme.accent,
          margin: 0,
        }}
      >
        Ready to Hunt?
      </p>
      <p
        style={{
          fontFamily: theme.serif,
          fontSize: '28px',
          fontWeight: 400,
          lineHeight: 1.2,
          margin: '12px 0 28px',
          color: theme.text,
        }}
      >
        Call us today.
      </p>
      <a
        href="tel:478-256-3448"
        style={{
          display: 'block',
          fontFamily: theme.serif,
          fontSize: '32px',
          fontWeight: 500,
          color: theme.accent,
          textDecoration: 'none',
          marginBottom: '24px',
        }}
      >
        478.256.3448
      </a>
      <div style={{ fontFamily: theme.sans, fontSize: '13px', lineHeight: 1.7, color: theme.textMuted }}>
        <p style={{ margin: '0 0 4px' }}>2481 Old Marion Rd</p>
        <p style={{ margin: '0 0 16px' }}>Dry Branch, GA 31020</p>
        <a
          href="mailto:tomhaskins@hogwildusa.com"
          style={{ color: theme.textMuted, textDecoration: 'none', borderBottom: `1px solid ${theme.textMuted}` }}
        >
          tomhaskins@hogwildusa.com
        </a>
      </div>
    </aside>
  );
}

export function TwoColumn({ children }: { children: ReactNode }) {
  return <div className="page-twocol">{children}</div>;
}
