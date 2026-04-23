import { Link } from 'react-router-dom';
import { footerConfig } from '../config';

export default function Footer() {
  const hasFooterContent =
    footerConfig.ageGateText ||
    footerConfig.brandName ||
    footerConfig.brandTaglineLines.length > 0 ||
    footerConfig.columns.length > 0 ||
    footerConfig.copyright;

  if (!hasFooterContent) {
    return null;
  }

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#231a0e',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(252, 250, 238, 0.08)',
      }}
    >
      {/* Top CTA Area */}
      <div
        style={{
          textAlign: 'center',
          padding: '80px 24px 60px',
        }}
      >
        {footerConfig.ageGateText && (
          <p
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#fcfaee',
              lineHeight: 1.3,
              maxWidth: '500px',
              margin: '0 auto 24px',
              textWrap: 'balance',
            }}
          >
            {footerConfig.ageGateText}
          </p>
        )}
        {footerConfig.phoneCtaText && (
          <a
            href={footerConfig.phoneHref || '#'}
            style={{
              display: 'inline-block',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1a1209',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              backgroundColor: '#c4956a',
              padding: '16px 48px',
              borderRadius: '2px',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = '#d4a87a';
              el.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = '#c4956a';
              el.style.transform = 'translateY(0)';
            }}
          >
            {footerConfig.phoneCtaText}
          </a>
        )}
        {footerConfig.email && (
          <p style={{ marginTop: '20px' }}>
            <a
              href={footerConfig.emailHref || '#'}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                color: '#8a7d6b',
                textDecoration: 'none',
                transition: 'color 0.4s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = '#fcfaee';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = '#8a7d6b';
              }}
            >
              {footerConfig.email}
            </a>
          </p>
        )}
      </div>

      {/* Footer Columns */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
        }}
      >
        {/* Brand Column */}
        <div>
          {footerConfig.brandName && (
            <p
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '18px',
                fontWeight: 500,
                color: '#fcfaee',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {footerConfig.brandName}
            </p>
          )}
          {footerConfig.brandTaglineLines.length > 0 && (
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#8a7d6b',
              }}
            >
              {footerConfig.brandTaglineLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < footerConfig.brandTaglineLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
        </div>

        {footerConfig.columns.map((column) => (
          <div key={column.heading}>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: '#c4956a',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {column.heading}
            </p>
            {column.links.map((item) => {
              const isInternal = item.href?.startsWith('/');
              const linkStyle: React.CSSProperties = {
                display: 'block',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                color: '#8a7d6b',
                textDecoration: 'none',
                marginBottom: '10px',
                transition: 'color 0.4s ease',
              };
              const handleEnter = (e: React.MouseEvent) => { (e.target as HTMLElement).style.color = '#fcfaee'; };
              const handleLeave = (e: React.MouseEvent) => { (e.target as HTMLElement).style.color = '#8a7d6b'; };
              return isInternal ? (
                <Link
                  key={`${column.heading}-${item.label}`}
                  to={item.href}
                  style={linkStyle}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={`${column.heading}-${item.label}`}
                  href={item.href}
                  onClick={(e) => { if (!item.href || item.href === '#') e.preventDefault(); }}
                  style={linkStyle}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(252, 250, 238, 0.06)',
          padding: '24px',
          textAlign: 'center',
        }}
      >
        {footerConfig.copyright && (
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              color: '#8a7d6b',
              letterSpacing: '0.5px',
            }}
          >
            &copy; {footerConfig.copyright}
          </p>
        )}
      </div>
    </footer>
  );
}
