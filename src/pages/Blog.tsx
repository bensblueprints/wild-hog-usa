import PageLayout, { ContactCard, Prose, TwoColumn } from './PageLayout';
import { theme } from './theme';

const POSTS = [
  {
    date: 'Dec 13, 2024',
    title: 'The History and Thrill of Russian Boar Hunting in Georgia',
    excerpt:
      "Georgia is rich in history, outdoor adventures, and wildlife, offering hunters an unparalleled opportunity to immerse themselves in the wild. Among the most exciting and challenging experiences is hunting Russian boars — a tradition that combines history, skill, and adrenaline.",
    tags: ['Blog posts'],
  },
  {
    date: 'Nov 19, 2024',
    title: 'The Ultimate Guide to Wild Hog Hunting in Georgia',
    excerpt:
      "Georgia is known for its lush landscapes, rich wildlife, and diverse hunting opportunities. Whether you're an experienced hunter or a newcomer looking for an adventure, Georgia offers unparalleled wild hog hunting.",
    tags: ['Blog posts'],
  },
  {
    date: 'Nov 3, 2024',
    title: 'A Father-Son Wild Hog & Whitetail Deer Hunting Adventure',
    excerpt:
      'For outdoor-loving dads and sons, few experiences can match the thrill of a wild hog and whitetail deer hunting adventure in Middle Georgia with Hog Wild USA.',
    tags: ['Blog posts'],
  },
  {
    date: 'Oct 20, 2024',
    title: '2024 Opening Day of Deer Season at Hog Wild USA in Macon, GA',
    excerpt:
      'As the morning mist rises over the dense woods of central Georgia, anticipation is at an all-time high. Hunters from across the state and beyond are gearing up for the much-anticipated opening day of deer season.',
    tags: ['Fall Whitetail Deer Hunt', 'Georgia Hog Hunting', 'Guided Hog Hunt'],
  },
  {
    date: 'Oct 11, 2024',
    title: 'Wild Hog and Whitetail Deer Hunting in Middle Georgia',
    excerpt:
      "Middle Georgia is a paradise for hunters — a rich variety of game and endless opportunities to explore the region's natural beauty. Wild hog hunting is a year-round pursuit crucial for land conservation.",
    tags: ['Blog posts'],
  },
  {
    date: 'Aug 28, 2024',
    title: '2025 Fall Whitetail Deer & Wild Hog Combo Hunts — Book Them Now!',
    excerpt:
      "Now booking our Fall Whitetail Deer & Wild Hog combo hunts for the 2025 season. Experience some of Georgia's best wild hog hunts on lands including Indian land just east of Macon.",
    tags: ['Deer & Hog Combo Hunts', 'Hog Hunting at Night', 'Wild Hog Hunting'],
  },
  {
    date: 'Jun 22, 2024',
    title: 'A Wild Hog Hunting Adventure with Hog Wild USA',
    excerpt:
      "Few adventures compare to wild hog hunting with Hog Wild USA when it comes to experiencing the thrill of the hunt amidst the picturesque landscapes and swamplands of Middle Georgia.",
    tags: ['Blog posts'],
  },
  {
    date: 'Jun 11, 2024',
    title: 'Start Your Next Adventure: Wild Hog Hunting in Georgia',
    excerpt:
      "In the dense forests and sprawling fields of Georgia, a primal adventure awaits those who seek the rush of the hunt. Among the most exhilarating pursuits is hunting boar at Hog Wild USA — Georgia's premier outfitter.",
    tags: ['Blog posts'],
  },
  {
    date: 'Jun 1, 2024',
    title: 'We Are Now Booking Our 2024 Peach Festival Hunts — $325',
    excerpt:
      'Georgia peach season is a special time. We bait our sites with rotten peaches, spoiled produce, and corn — making for some of the best wild hog hunting anywhere. Book your Peach Festival hunt today.',
    tags: ['Peach Festival Hunts'],
  },
  {
    date: 'Sep 10, 2023',
    title: 'Nighttime Hog Hunting: The Ultimate Bachelor Party Experience',
    excerpt:
      "Planning a bachelor party that stands out from the ordinary? Nighttime hog hunting with Hog Wild USA is an adrenaline-fueled experience your group will talk about for years.",
    tags: ['Bachelor Party', 'Hog Hunting at Night'],
  },
];

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

          <div style={{ marginTop: '56px', display: 'grid', gap: '32px' }}>
            {POSTS.map((post) => (
              <article
                key={post.title}
                style={{
                  padding: '36px',
                  backgroundColor: theme.bgLightAlt,
                  borderLeft: `3px solid ${theme.accent}`,
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
                <h3 style={{ fontFamily: theme.serif, fontSize: '28px', fontWeight: 500, color: theme.textDark, margin: '0 0 12px', lineHeight: 1.2 }}>
                  {post.title}
                </h3>
                <p style={{ fontFamily: theme.sans, fontSize: '15px', lineHeight: 1.7, color: theme.textDarkMuted, margin: 0 }}>
                  {post.excerpt}
                </p>
              </article>
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
