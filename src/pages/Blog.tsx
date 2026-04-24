import { Link } from 'react-router-dom';
import PageLayout, { ContactCard, Prose, TwoColumn } from './PageLayout';
import { theme } from './theme';
import { BLOG_POSTS } from './blogPosts';

export default function Blog() {
  return (
    <PageLayout
      pageTitle="Wild Hog Hunting Georgia Blog – Tips & Stories | Hog Wild USA"
      pageDescription="Tips, stories, and guides from Hog Wild USA — Georgia's premier hog hunting outfitter. Russian boar, whitetail deer, night hunts, and Peach Festival hunts."
      eyebrow="Tips & Stories"
      title="Blog"
      heroImage="/images/8_Hunting_Lodge_Gopher_Plantation.png"
    >
      <TwoColumn>
        <div>
          <Prose>
            <p>Stories from the swamp, tips for your first hunt, and guides to the equipment and tactics that work on our 1000+ acres along the Ocmulgee River.</p>
          </Prose>

          <div style={{ marginTop: '56px', display: 'grid', gap: '24px' }}>
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                style={{
                  display: 'block',
                  padding: '32px',
                  backgroundColor: theme.bgLightAlt,
                  borderLeft: `3px solid ${theme.accent}`,
                  textDecoration: 'none',
                  color: theme.textDark,
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
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
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <time style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: theme.accent }}>
                    {post.date}
                  </time>
                  <span style={{ color: theme.textDarkMuted }}>•</span>
                  <span style={{ fontFamily: theme.sans, fontSize: '11px', color: theme.textDarkMuted, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {post.tags.join(' · ')}
                  </span>
                </div>
                <h3 style={{ fontFamily: theme.serif, fontSize: '26px', fontWeight: 500, color: theme.textDark, margin: '0 0 12px', lineHeight: 1.2 }}>
                  {post.title}
                </h3>
                <p style={{ fontFamily: theme.sans, fontSize: '15px', lineHeight: 1.7, color: theme.textDarkMuted, margin: 0 }}>
                  {post.excerpt}
                </p>
                <p style={{ fontFamily: theme.sans, fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: theme.accent, margin: '16px 0 0' }}>
                  Read More →
                </p>
              </Link>
            ))}
          </div>

          <p style={{ fontFamily: theme.sans, fontSize: '14px', color: theme.textDarkMuted, marginTop: '48px', textAlign: 'center' }}>
            Want the full story on any of these posts? Call Tom at{' '}
            <a href="tel:478-256-3448" style={{ color: theme.accent, fontWeight: 600 }}>478.256.3448</a>.
          </p>
        </div>

        <ContactCard />
      </TwoColumn>
    </PageLayout>
  );
}
