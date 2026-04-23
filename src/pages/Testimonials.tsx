import PageLayout from './PageLayout';
import { theme } from './theme';

const QUOTES = [
  {
    author: 'Kuma Chan',
    body:
      "Went down for a 2.5 day hunt and wasn't disappointed. Accommodations were much better than expected and Tommy (owner) and our guide Thomas (son) were very personable, knowledgeable and willing to go the extra mile to satisfy their guest. As for the hunt, you can hunt as much or as little as you like. It was usually setup in 2 sessions. First we met in the morning at the huddle house at 4:45 for breakfast. The first session was from about 5:30 to noon and the second session starts around 3 or 5 pm and goes into the night. You can literally hunt as late as you want but the latest we stayed out was until 11pm. We saw a lot of hogs on the ground but only 1 deer so we didn't get a chance to harvest any deer. They have plenty of large boar running around out there so your chances of taking home meat are high. Everyone who was at our camp had multiple hogs to take back with them. I will be scheduling another hunt with them around this time next year… Very pleased with the hunts and staff!",
  },
  {
    author: 'Lee Powers',
    body:
      "I've Hog hunted with Tommy multiple times now, and I have to say I've been nothing less than impressed. His guides consistently guarantee you will see hogs, and they'll even go out of their way to hook you up with the biggest hogs on the property. Next time I plan a hunt in GA, it's definitely going to be with Mr. Haskins and his crew.",
  },
  {
    author: 'Benjamin Tabler',
    body:
      "I'm from Ohio and I looked for a place to hunt for about a month. Me and my friend finally decided on Hog Wild. We were happy we did. Tommy and his guides are very good and treat you as guests would be treated at a resort. Always checking in and making sure you are satisfied with everything. The guides work extremely hard to get you what you want. We will probably be returning next year.",
  },
  {
    author: 'Huston Stewart',
    body:
      'Tommy Haskins runs THE BEST wild boar hunt in the South hands down. His staff is very professional and they know how to put you on wild game. I\'ve been several times and have never had anything but a wonderful experience and would recommend them to anyone that wants to go on a REAL wild boar hunt! A+++',
  },
];

export default function Testimonials() {
  return (
    <PageLayout
      pageTitle="Testimonials – Georgia Hog Hunting Experiences | Hog Wild USA"
      pageDescription="Hear from hunters who've taken Russian wild boar at Hog Wild USA in Middle Georgia. Four unedited reviews of guides, lodging, and trophy hogs."
      eyebrow="In Their Own Words"
      title="Testimonials"
      heroImage="/images/2_Diehard_Hog_Hunter_Takes_a_Giant.png"
    >
      <div style={{ display: 'grid', gap: '48px', maxWidth: '880px', margin: '0 auto' }}>
        {QUOTES.map((q, i) => (
          <figure
            key={q.author}
            style={{
              margin: 0,
              padding: '48px',
              backgroundColor: i % 2 === 0 ? '#fff' : theme.bgLightAlt,
              borderLeft: `4px solid ${theme.accent}`,
            }}
          >
            <div
              style={{
                fontFamily: theme.serif,
                fontSize: '72px',
                lineHeight: 1,
                color: theme.accent,
                margin: '0 0 16px',
              }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote
              style={{
                fontFamily: theme.serif,
                fontSize: '22px',
                lineHeight: 1.5,
                color: theme.textDark,
                fontStyle: 'italic',
                fontWeight: 400,
                margin: 0,
              }}
            >
              {q.body}
            </blockquote>
            <figcaption
              style={{
                fontFamily: theme.sans,
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: theme.accent,
                marginTop: '28px',
              }}
            >
              — {q.author}
            </figcaption>
          </figure>
        ))}
      </div>
      <p
        style={{
          fontFamily: theme.sans,
          fontSize: '14px',
          color: theme.textDarkMuted,
          marginTop: '64px',
          textAlign: 'center',
        }}
      >
        Want to leave us a review?{' '}
        <a href="https://www.facebook.com/hogwildusa1/" target="_blank" rel="noreferrer" style={{ color: theme.accent, fontWeight: 600 }}>
          See more reviews on Facebook →
        </a>
      </p>
    </PageLayout>
  );
}
