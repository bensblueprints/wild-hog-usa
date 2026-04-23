import PageLayout, { Prose, SectionHeading, CTAButton, ContactCard, TwoColumn } from './PageLayout';

export default function WildBoarHunting() {
  return (
    <PageLayout
      pageTitle="Wild Boar Hunting Georgia – Hog Wild USA Guided Hunts"
      pageDescription="Georgia ranks among the best states to harvest a wild hog. Learn about Russian wild boar biology and book a guided boar hunt with Hog Wild USA."
      eyebrow="Hunting Wild Hogs"
      title="Wild Boar Hunting in Georgia"
      heroImage="/images/5_Georgia_Wild_Hog_Hunts_Georgia_Hog.png"
    >
      <TwoColumn>
        <div>
          <Prose>
            <p>Wild boar is an animal known by many names — feral swine, Russian boar, hogs, Eurasian boar, wild pigs, feral pigs, and <em>Sus scrofa</em>. This animal belongs to the scientific family <em>Suidae</em>. On average, an adult wild boar stands 21–48 inches tall and 35–78 inches long. Our southern wild boars range from 165 to well over 300 pounds. Our average harvest hog is around 180 pounds.</p>
            <p>According to population statistics, wild boars have exploded across many states in the U.S. This is the prime reason wild boar hunting in Georgia has grown to such an extent. Georgia ranks as one of the <strong>best states</strong> to harvest a wild hog.</p>
            <p>Georgia is one of the states where individuals can hunt wild hogs all year long, mainly because wild boars in Georgia are considered feral animals, not wild game. If you have never been on a hunting trip, Hog Wild USA can help you with your wild boar hunting trip in Georgia.</p>
            <p>At Hog Wild USA, it's our goal to provide you with an unforgettable wild boar-hunting experience. Whether you're interested in an individual or group hunt, we customize your experience so it's one you'll never forget.</p>
            <p>You can get in touch with Hog Wild USA for a guided boar hunt service in Georgia. We have been in business for more than 28 years and have helped thousands of hunters with their wild boar hunting in Georgia.</p>
          </Prose>

          <div style={{ marginTop: '64px' }}>
            <SectionHeading title="Ready to Book?" />
            <Prose>
              <p>Give us a call today at <strong>478.256.3448</strong> to schedule your next wild boar hunt.</p>
            </Prose>
            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <CTAButton href="tel:478-256-3448">Call 478.256.3448</CTAButton>
              <CTAButton href="/book-a-hunt" variant="outline">Book a Hunt</CTAButton>
            </div>
          </div>
        </div>

        <ContactCard />
      </TwoColumn>
    </PageLayout>
  );
}
