import PageLayout, { Prose, SectionHeading, CTAButton, ContactCard, TwoColumn } from './PageLayout';
import { theme } from './theme';

const TIPS = [
  {
    title: 'Wild hogs live in deciduous and mixed forests',
    body: 'Here in middle Georgia, that means heavily wooded swamps and marshland. A good quality day pack with adequate food and water is recommended when scouting these areas for fresh sign made by wild hogs.',
  },
  {
    title: 'Know the regulations',
    body: 'Learn the regulations about wild hog hunting in the state where you plan to hunt. Good news: most states have few regulations when it comes to wild hogs because the population is exploding and states are desperate to bring it under control.',
  },
  {
    title: 'Hogs love swamp land and wet areas',
    body: 'Because wild boar do not have sweat glands, they have to "wallow" to cool off in South Georgia. Expect to see wild hogs near water sources in the mornings and late evenings. We place our stands strategically over these water sources and wallows.',
  },
  {
    title: 'Follow the pig trails',
    body: 'If you come across any "pig" trails made by wild hogs, keep track of them — wild boars are creatures of habit and will come back down those trails headed back to their favorite feeding areas and wallows.',
  },
];

export default function GuidedWildHogHunts() {
  return (
    <PageLayout
      pageTitle="Guided Wild Hog Hunts Georgia – Hog Wild USA"
      pageDescription="Tips for your first guided wild hog hunt in Georgia. Scout water sources, follow pig trails, and know the regulations. Book with Hog Wild USA."
      eyebrow="Guided Hunts"
      title="Guided Wild Hog Hunts"
      heroImage="/images/6_Hog_Hunting_Gopher_Plantation.png"
    >
      <TwoColumn>
        <div>
          <Prose>
            <p>Hog hunting is a time-honored tradition in the United States. In recent years there has been an increase in the total number of hunts organized here in Georgia — mainly because the population of wild hogs has exploded. The demand for guided wild hog hunts has grown to a great extent here in the Southeast. Be sure to check our Facebook page for pictures of our latest Tactacam Trail Camera captures. We post the best pictures of what's going on in our neck of the woods almost daily.</p>
            <p>If you've always wanted to become a part of this tradition, right now is the best time. Here are a few tips before your first Georgia-guided hog hunt.</p>
          </Prose>

          <div style={{ marginTop: '72px' }}>
            <SectionHeading eyebrow="Field Notes" title="Tips for First-Time Hog Hunters" />
            <div style={{ display: 'grid', gap: '32px', marginTop: '40px' }}>
              {TIPS.map((tip, i) => (
                <div
                  key={tip.title}
                  style={{
                    padding: '32px',
                    backgroundColor: theme.bgLightAlt,
                    borderLeft: `3px solid ${theme.accent}`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: theme.sans,
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '2px',
                      color: theme.accent,
                      margin: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3
                    style={{
                      fontFamily: theme.serif,
                      fontSize: '24px',
                      fontWeight: 500,
                      color: theme.textDark,
                      margin: '12px 0 12px',
                    }}
                  >
                    {tip.title}
                  </h3>
                  <p style={{ fontFamily: theme.sans, fontSize: '15px', lineHeight: 1.7, color: theme.textDarkMuted, margin: 0 }}>
                    {tip.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '72px' }}>
            <Prose>
              <p>We at Hog Wild USA provide guided wild hog hunts in Georgia and go the extra mile to ensure your hunting trip is full of amazing memories that you are going to remember forever.</p>
            </Prose>
            <div style={{ marginTop: '32px' }}>
              <CTAButton href="/book-a-hunt">Book Your Hunt</CTAButton>
            </div>
          </div>
        </div>

        <ContactCard />
      </TwoColumn>
    </PageLayout>
  );
}
