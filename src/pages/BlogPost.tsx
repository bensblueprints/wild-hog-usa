import { Link, useParams } from 'react-router-dom';
import PageLayout, { ContactCard, CTAButton, Prose, TwoColumn } from './PageLayout';
import { theme } from './theme';
import { BLOG_POSTS } from './blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout
        pageTitle="Post Not Found | Hog Wild USA Blog"
        eyebrow="404"
        title="Post Not Found"
        heroImage="/images/8_Hunting_Lodge_Gopher_Plantation.png"
      >
        <Prose>
          <p>We couldn't find that blog post. Head back to the <Link to="/blog" style={{ color: theme.accent, fontWeight: 600 }}>blog index</Link>.</p>
        </Prose>
      </PageLayout>
    );
  }

  const index = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? BLOG_POSTS[index - 1] : null;
  const next = index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : null;

  return (
    <PageLayout
      pageTitle={`${post.title} | Hog Wild USA Blog`}
      pageDescription={post.excerpt}
      eyebrow={post.date}
      title={post.title}
      heroImage="/images/8_Hunting_Lodge_Gopher_Plantation.png"
    >
      <TwoColumn>
        <div>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: theme.accent }}>
              {post.tags.join(' · ')}
            </span>
          </div>

          <Prose>
            <p style={{ fontSize: '20px', lineHeight: 1.6, fontFamily: theme.serif, fontStyle: 'italic', color: theme.textDark, borderLeft: `3px solid ${theme.accent}`, paddingLeft: '20px', margin: '0 0 40px' }}>
              {post.excerpt}
            </p>
            <p>The full text of this post is currently being migrated from the original hogwildusa.com site. In the meantime, get in touch with Tom Haskins for the latest on this topic — our team is happy to share stories from the swamp, give tactical advice, or help you plan your next Georgia wild hog hunting adventure.</p>
            <p>Hog Wild USA is Middle Georgia's premier wild hog hunting outfitter — 28+ years in business, 1000+ acres of fields, swamplands, and upland territories along the Ocmulgee River. We offer guided day hunts, combo deer/hog hunts, 3-day all-inclusive packages, and thrilling nighttime hunts with legal green lights.</p>
            <p>Give us a call at <a href="tel:478-256-3448" style={{ color: theme.accent, fontWeight: 600 }}>478.256.3448</a> or email <a href="mailto:tomhaskins@hogwildusa.com" style={{ color: theme.accent, fontWeight: 600 }}>tomhaskins@hogwildusa.com</a> to book your hunt.</p>
          </Prose>

          <div style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <CTAButton href="/book-a-hunt">Book a Hunt</CTAButton>
            <CTAButton href="tel:478-256-3448" variant="outline">Call 478.256.3448</CTAButton>
          </div>

          <nav style={{ marginTop: '80px', padding: '32px 0', borderTop: `1px solid ${theme.borderDark}`, borderBottom: `1px solid ${theme.borderDark}`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              {prev && (
                <Link to={`/blog/${prev.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '2px', color: theme.accent, margin: 0, textTransform: 'uppercase' }}>← Newer</p>
                  <p style={{ fontFamily: theme.serif, fontSize: '17px', color: theme.textDark, margin: '8px 0 0', lineHeight: 1.3 }}>{prev.title}</p>
                </Link>
              )}
            </div>
            <div style={{ textAlign: 'right' }}>
              {next && (
                <Link to={`/blog/${next.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '2px', color: theme.accent, margin: 0, textTransform: 'uppercase' }}>Older →</p>
                  <p style={{ fontFamily: theme.serif, fontSize: '17px', color: theme.textDark, margin: '8px 0 0', lineHeight: 1.3 }}>{next.title}</p>
                </Link>
              )}
            </div>
          </nav>

          <p style={{ fontFamily: theme.sans, fontSize: '13px', color: theme.textDarkMuted, marginTop: '32px', textAlign: 'center' }}>
            <Link to="/blog" style={{ color: theme.accent, fontWeight: 600 }}>← All blog posts</Link>
          </p>
        </div>

        <ContactCard />
      </TwoColumn>
    </PageLayout>
  );
}
