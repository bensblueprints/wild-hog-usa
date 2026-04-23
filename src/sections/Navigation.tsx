import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getLenis } from '../hooks/useLenis';
import { navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      if (!onHome) {
        setIsLightSection(false);
        return;
      }

      const navHeight = navRef.current?.offsetHeight ?? 0;
      const probeY = navHeight > 0 ? navHeight * 0.6 : 60;
      const lightSectionIds = ['anatomy', 'tiers', 'footer'];
      const isInLightSection = lightSectionIds.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= probeY && rect.bottom >= probeY;
      });

      setIsLightSection(isInLightSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [onHome]);

  const baseTextColor = isLightSection ? '#3a2e1f' : '#fcfaee';
  const hoverTextColor = isLightSection ? '#8a7d6b' : '#c4956a';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (target.startsWith('#')) {
      if (!onHome) {
        navigate('/' + target);
        return;
      }
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(target);
      } else {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(target);
    }
  };

  if (!navigationConfig.brandName && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: scrolled ? '16px 0' : '24px 0',
        transition: 'padding 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="liquid-glass"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '14px 40px',
          borderRadius: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {navigationConfig.brandName ? (
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '20px',
              fontWeight: 500,
              color: baseTextColor,
              letterSpacing: '2px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'color 0.6s ease',
            }}
          >
            {navigationConfig.brandName}
          </a>
        ) : (
          <div />
        )}

        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {navigationConfig.links.map((item) => (
            <a
              key={`${item.label}-${item.target}`}
              href={item.target}
              onClick={(e) => handleNavClick(e, item.target)}
              className="nav-link"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: baseTextColor,
                letterSpacing: '1.3px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.6s ease',
                opacity: 0.85,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = hoverTextColor;
                (e.target as HTMLAnchorElement).style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = baseTextColor;
                (e.target as HTMLAnchorElement).style.opacity = '0.85';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
