import PageLayout, { Prose, SectionHeading, CTAButton, ContactCard, TwoColumn } from './PageLayout';
import { theme } from './theme';

export default function AboutOurHunts() {
  return (
    <PageLayout
      pageTitle="Guided Hog Hunts Georgia – About Our Hunts | Hog Wild USA"
      pageDescription="Learn what to expect on a guided wild hog hunt in Middle Georgia. Night hunting with green lights, 2-man stands, expert guides, QDM farms along the Ocmulgee River."
      eyebrow="About Our Hunts"
      title="Hog Hunt GA — The Experience"
      heroImage="/images/about-hunts-hero.webp"
    >
      <TwoColumn>
        <div>
          <Prose>
            <p>Wild hog hunting here has been <strong>GREAT</strong>. Hog Wild USA has the largest Russian Boars that can be found in Georgia. Our guided hunts are the best hunts you will ever encounter. Lots of hogs have been seen and taken on our swamp hunts in the last few weeks. Several exceptional boars have been taken by our guests.</p>
            <p>We are the premier hog hunting outfitters in Georgia. We offer exciting nighttime hunts with green lights that do not spook the game — legal in Georgia. Our nighttime hog hunting is incredibly successful because that's when hogs are on the move and feeding.</p>
            <p>Our hunts take place in our swamps, cleared upland fields, oak heads, and our planted Fall food plots. We use nice, roomy, and comfortable 2-man stands and specialize in father/son or father/daughter hunts. We feed these deer Apple Valley 28% high-protein deer feed supplement all year long.</p>
          </Prose>

          <div style={{ marginTop: '80px' }}>
            <SectionHeading eyebrow="A Typical Day" title="What to Expect" />
            <Prose>
              <p>Your hunt will usually begin before daylight. If coming for a one-day hunt, we will meet at the local breakfast spot for a quick bite and to get acquainted. We have a rifle range set up nearby to get you on target when you arrive at camp. We will get you settled in and answer any questions you and your group might have to make sure you are all comfortable before embarking on your Hog Wild USA hunting experience. Our guides are very knowledgeable and can help you every step of the way.</p>
              <p>Our hunts begin in the back waters and swamps of the Ocmulgee River Basin. This river basin is home to huge whitetails. It is also home to scores of wild hogs, bobcats, coyotes, raccoons, possums, wild turkey, and a number of other animals, some of which may be hunted every day of the year. Our hunts take place on several different large land tracts and farms located close to Macon, GA — 80 miles south of Atlanta.</p>
              <p>Hunting takes place during early morning and late afternoon/evening as well as nighttime hours when these animals are most active. Methods include spot-and-stalk, still hunting over corn feeders, and baited roads and trails. We have hog depredation permits that allow us to legally hunt at night, with a 12-volt light and over baited feeders, which significantly increases your odds of a shot.</p>
              <p>Coyotes and bobcats are common in our swamps. Method for hunting predators is a mouth call or electronic caller to lure animals into shooting range. Our hunters take many coyotes and (bobcats when in season) while simply still hunting for hogs. (Bobcats may only be taken with small game weapons when in season.)</p>
              <p>After dark, plan on staying out and hunting hogs and predators via spot-light in the swamps and fields around feeding and travel areas. After dark is when the really <strong>BIG</strong> Georgia wild hogs come out to feed.</p>
            </Prose>
          </div>

          <div style={{ marginTop: '80px' }}>
            <SectionHeading eyebrow="Loaner Gear" title="What to Bring" />
            <Prose>
              <p>We have loaner equipment — green lights and rifles/shotguns/ammo — available for your use while hunting with us. If you'd rather travel light, let us know when you book and we'll set you up.</p>
              <p>For hog hunting in Georgia, plan on bringing:</p>
              <ul>
                <li>Valid Georgia hunting license</li>
                <li>Your rifle, shotgun, or crossbow — plus ammo (we can rent this to you if needed)</li>
                <li>Rifle scope or night-vision/thermal optic (loaner green lights available)</li>
                <li>Blaze orange vest or hat (required during firearms deer season)</li>
                <li>Warm layered clothing — Middle Georgia swamps get cold at night</li>
                <li>Waterproof boots — you <em>will</em> be in wet ground</li>
                <li>Insect repellent (Thermacell recommended)</li>
                <li>Headlamp or flashlight with red/green lens</li>
                <li>Binoculars</li>
                <li>Daypack with water and snacks</li>
                <li>Cooler for your harvested meat (ice provided on 3-day packages)</li>
                <li>Toiletries and a change of clothes for lodge stays</li>
              </ul>
              <p>This list is a starting point, not complete. Call us with any questions — we're always happy to give advice.</p>
            </Prose>
          </div>

          <div style={{ marginTop: '80px' }}>
            <SectionHeading eyebrow="After the Shot" title="What Happens if I Get a Hog or Deer?" />
            <Prose>
              <p>Your guide will help you recover the animal and get it back to camp. On our 3-Day "ALL IN" Package, all animal cleaning is included — we skin it, quarter it, and get it on ice for your coolers. On our Skinny Package and one-day hunts, you can clean your own animal or we'll do it for you for $75 per animal.</p>
              <p>We have a dedicated skinning rack at camp, and ice is always available. If you'd like your hog processed further (sausage, hams, etc.), we can refer you to a local processor — turnaround is usually 1–2 weeks and they can ship directly to you.</p>
              <p>Hog Wild USA does not mount or euro-mount heads on site, but we're happy to recommend taxidermists in the area for trophy Russian boar and whitetail deer.</p>
            </Prose>
          </div>

          <div style={{ marginTop: '80px' }}>
            <SectionHeading eyebrow="Packages" title="How Much Does It Cost?" />
            <Prose>
              <p>Our hunts start at <strong>$325.00 per person, per day</strong>. Here's the quick rundown — see the <a href="/book-a-hunt" style={{ color: theme.accent, fontWeight: 600 }}>Book a Hunt</a> page for full details.</p>
              <ul>
                <li><strong>$325</strong> — One-day hunt, hogs only (no lodging)</li>
                <li><strong>$375</strong> — One-day deer/hog combo hunt (no lodging)</li>
                <li><strong>$525</strong> — One-day hunt with meals &amp; lodging</li>
                <li><strong>$550</strong> — One-day guaranteed meat hog (100% guaranteed hog up to 150 lb)</li>
                <li><strong>$650</strong> — One-day guaranteed trophy hog (100% guaranteed hog 200 lb+)</li>
                <li><strong>$1,295</strong> — 3-Day "Skinny" Package (lodging, no meals)</li>
                <li><strong>$1,495</strong> — 3-Day "ALL IN" Package (most popular — lodging, meals, cleaning, gratuities)</li>
              </ul>
              <p>A 50% deposit secures your hunt dates. 2026 Corporate and bachelor-party rates available — call for a custom quote.</p>
            </Prose>
          </div>

          <div style={{ marginTop: '80px' }}>
            <SectionHeading eyebrow="Hunting Club" title="Only 1 Opening Left — 2026 Season" />
            <Prose>
              <p>Hunting Club Opportunities for the 2026 Season. Only 1 Opening Left. Our lands are in Twiggs County, GA about 15 minutes east of Macon. Several of our farms have irrigated crops, multiple food plots, lodging, a skinning rack, and all amenities. Water and power are available at our farms.</p>
              <p>These are <strong>ALL QDM farms</strong> with Mineral Sites and our 28% Protein Feeding Program in place. Our Club is limited to 3 hunters only on over 1000 acres.</p>
              <p style={{ fontSize: '22px', color: theme.accent, fontFamily: theme.serif }}>$4,000 per membership — no guests.</p>
              <p>If you are interested, call now before the last one is gone.</p>
            </Prose>
            <div style={{ marginTop: '32px' }}>
              <CTAButton href="tel:478-256-3448">Call 478.256.3448</CTAButton>
            </div>
          </div>
        </div>

        <ContactCard />
      </TwoColumn>
    </PageLayout>
  );
}
