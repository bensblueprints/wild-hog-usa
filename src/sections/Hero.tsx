import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { heroConfig } from '../config';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasHeroContent =
    heroConfig.videoPath ||
    heroConfig.eyebrow ||
    heroConfig.titleLine ||
    heroConfig.titleEmphasis ||
    heroConfig.subtitleLine1 ||
    heroConfig.subtitleLine2 ||
    heroConfig.ctaText;

  // iOS Safari / Chrome Mobile: force muted via JS property before calling play().
  // React prior to 18 didn't set the `muted` HTML attribute reliably, and some
  // mobile browsers check the live property, not the attribute, before allowing autoplay.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute('muted', '');
    v.setAttribute('playsinline', '');
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          // Autoplay blocked (Low Power Mode, data saver). Video will show poster.
          // Try once more after user interaction.
          const resume = () => { v.play().catch(() => {}); };
          window.addEventListener('touchstart', resume, { once: true, passive: true });
          window.addEventListener('click', resume, { once: true });
        });
      }
    };
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener('loadeddata', tryPlay, { once: true });
  }, []);

  useEffect(() => {
    if (!hasHeroContent) return;

    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4, ease: 'power2.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 0.85, y: 0, duration: 1.0, ease: 'power2.out' },
        '-=0.6'
      );

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );
    }

    return () => {
      tl.kill();
    };
  }, [hasHeroContent]);

  if (!hasHeroContent) {
    return null;
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 'clamp(32px, 8vh, 100px)',
        paddingTop: 'clamp(100px, 14vh, 180px)',
      }}
    >
      {/* Background image fallback — always painted underneath the video.
          If autoplay is blocked or the video fails, the poster remains visible. */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'url(/videos/hero-poster.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Video Background */}
      {heroConfig.videoPath && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          {...{ 'webkit-playsinline': 'true', 'x5-playsinline': 'true' } as Record<string, string>}
          disablePictureInPicture
          disableRemotePlayback
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src={heroConfig.videoPath} type="video/mp4" />
        </video>
      )}

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,18,9,0.3) 0%, rgba(26,18,9,0.6) 70%, rgba(26,18,9,0.85) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content Panel */}
      <div
        className="liquid-glass"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '640px',
          width: 'calc(100% - 32px)',
          padding: 'clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px) clamp(28px, 4vw, 40px)',
          borderRadius: '2px',
          textAlign: 'center',
        }}
      >
        {heroConfig.eyebrow && (
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#c4956a',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {heroConfig.eyebrow}
          </p>
        )}

        {(heroConfig.titleLine || heroConfig.titleEmphasis) && (
          <h1
            ref={titleRef}
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(34px, 8vw, 62px)',
              fontWeight: 400,
              color: '#fcfaee',
              lineHeight: 1.1,
              marginBottom: '20px',
              opacity: 0,
            }}
          >
            {heroConfig.titleLine}
            {heroConfig.titleEmphasis && (
              <>
                <br />
                <em style={{ fontStyle: 'italic' }}>{heroConfig.titleEmphasis}</em>
              </>
            )}
          </h1>
        )}

        {(heroConfig.subtitleLine1 || heroConfig.subtitleLine2) && (
          <p
            ref={subtitleRef}
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              color: 'rgba(252, 250, 238, 0.85)',
              lineHeight: 1.7,
              marginBottom: '32px',
              opacity: 0,
              maxWidth: '440px',
              margin: '0 auto 32px',
            }}
          >
            {heroConfig.subtitleLine1}
            {heroConfig.subtitleLine1 && heroConfig.subtitleLine2 && <br />}
            {heroConfig.subtitleLine2}
          </p>
        )}

        {/* CTA Group */}
        {heroConfig.ctaText && (
          <div
            ref={ctaRef}
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              opacity: 0,
            }}
          >
            <a
              href={heroConfig.ctaTargetId || '#'}
              onClick={(e) => {
                e.preventDefault();
                if (!heroConfig.ctaTargetId) return;
                const el = document.querySelector(heroConfig.ctaTargetId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: '#1a1209',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                backgroundColor: '#c4956a',
                padding: '16px 40px',
                borderRadius: '2px',
                display: 'inline-block',
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
              {heroConfig.ctaText}
            </a>
            {heroConfig.phoneCtaText && (
              <a
                href={heroConfig.phoneHref || '#'}
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#fcfaee',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  border: '1px solid rgba(252, 250, 238, 0.35)',
                  padding: '14px 32px',
                  borderRadius: '2px',
                  display: 'inline-block',
                  transition: 'all 0.6s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = '#fcfaee';
                  el.style.color = '#1a1209';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = 'transparent';
                  el.style.color = '#fcfaee';
                }}
              >
                {heroConfig.phoneCtaText}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
