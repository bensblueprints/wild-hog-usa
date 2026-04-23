import PageLayout, { ContactCard, Prose, SectionHeading, TwoColumn } from './PageLayout';
import { theme } from './theme';

const ENTRIES = [
  {
    date: 'October 9, 2025',
    title: 'Middle Georgia — Weekend Overview (Oct 4–5)',
    body: [
      'Weather: Saturday — cool morning around 59°F, mid-70s by midday, clear skies, light 5 mph winds. Ideal for deer movement early and late afternoon. Sunday — similar temps with slightly more cloud cover, winds up to 10 mph in the afternoon.',
      'Deer activity: Saturday and Sunday saw excellent early-morning movement, particularly around food plots and acorn-rich hardwood areas. Multiple hunters reported bucks trailing does — pre-rut activity is ramping up. Best time: 6:30 AM – 9:00 AM. Afternoon activity slowed midday, picked up near sunset around 6:00 PM.',
      'Wild hog activity: Saturday night hunting was productive. Several groups of hogs were spotted on trail cameras near corn feeders and wallows. Cooler temps made for perfect conditions, and hunters using night-vision scopes saw great success. Notable harvest: one of the largest Georgia wild hogs we\'ve taken all year. Best time: 10:00 PM – 1:00 AM.',
      'Takeaways for next weekend: Focus on morning hunts for deer as the pre-rut intensifies. Set up for night-time hog hunting for best chance at success. Watch food plots and areas near water — high-traffic zones for both species this season.',
    ],
  },
  {
    date: 'August 28, 2025',
    title: 'Busy Summer — 75+ Hogs Harvested',
    body: [
      'It\'s been a busy summer with wild hog hunting at Hog Wild USA. Our Peach Festival was a great success. Since the beginning of peach season here in Georgia, we have harvested more than 75 hogs.',
      'Time to start thinking about your 2025/26 Fall hunting plans. Gather your groups and add them to our schedule — the best dates fill up fast.',
    ],
  },
  {
    date: 'May 24, 2025',
    title: 'Peach Festival Wild Hog Hunt Kickoff',
    body: [
      'Excessive rain pattern has continued through early spring, and the Ocmulgee River has been in and out of its banks. Georgia\'s peach season is about to get underway with Memorial Day weekend.',
      'We\'ll start this week picking up spoiled fruit from roadside fruit stands — peaches, cantaloupes, honeydew, watermelons, sweet potatoes, tomatoes, and fresh corn all get thrown out once past their prime. Our 2025 Peach Festival Wild Hog Hunt officially begins this weekend. We put rotten peaches, spoiled produce, and corn on our bait sites for some of the best wild hog hunting available anywhere in Georgia.',
    ],
  },
  {
    date: 'January 29, 2025',
    title: 'Ocmulgee Flood Stage — Still Harvesting',
    body: [
      'We had a lot of rain this past week. The Ocmulgee River overflowed its banks and reached flood stage. Our prime hunting grounds are about a mile off the river and just south of the Bond Swamp NWR. We only had a couple of hunters in camp, and they managed to harvest 5 fair-chase Georgia wild hogs. They loaded all their coolers and headed back to North Carolina on Saturday morning.',
      'Hunting should be pretty good for the rest of the month and we have some openings. We offer Group, Corporate, and Bachelor Party rates — all available on a custom basis tailored to each group\'s needs.',
      'We\'re up to 26 TACTACAM Cell cameras in the woods taking photos of our bait sites — follow our Facebook page for the most current trail-cam photos.',
    ],
  },
  {
    date: 'January 16, 2025',
    title: 'End of 2024/2025 Deer Season — Record Hog Year',
    body: [
      'The 2024/2025 whitetail deer hunting season ended Sunday evening, January 13. Deer hunting had been slow since about Thanksgiving, with few deer being sighted during legal daylight shooting hours. Wild hog hunting was off the chain — one of the best seasons I can remember in recent history.',
      'Looking ahead to the 2025/2026 Hunting season: it should be even better. Our deer feed program will continue to provide supplemental feed to our deer herd. Our Tactacam Cell Cams have captured several nice mature bucks that made it through the season and should still be around next season, even bigger than they are now.',
    ],
  },
  {
    date: 'December 29, 2023',
    title: '27th Year In Business',
    body: [
      'It\'s been a while since we updated. Great season winding down the 2023/2024 Georgia Wild Hog season. We\'re running 15 cell cameras plus 3 non-cellular cameras on our best stands — getting several hundred game pictures every day.',
      'Guides are currently back at the lodge cleaning up a couple of wild hogs harvested today by our hunters. Hard to believe another hog hunting season is in the books. This was our 27th year in business — one of the oldest outfitters in the hog hunting business in Georgia.',
    ],
  },
  {
    date: 'June 24, 2023',
    title: 'Peach Festival Hunters — Low-Country Boil Tonight',
    body: [
      'Finally had a few hunters this weekend during the Peach Festival hunt. Many Georgia wild hogs showing up on our Tactacam Cellular Cameras — 13 cell cameras plus 5 non-cellular cameras, hundreds of game pictures each day.',
      'Guides are back at the lodge cleaning up 2 wild hogs harvested this morning. Weather has been better than in years past. We\'ll be preparing a low-country boil for our guests tonight before heading back out for an exciting nighttime hunt.',
    ],
  },
  {
    date: 'September 7, 2022',
    title: 'Bachelor Party from Northern Virginia — 16 Hogs',
    body: [
      'Last weekend we had a bachelor party of 11 guys come from Northern Virginia to hunt with us. They went home with 16 hogs and should have had a couple more. Sightings on nearly every stand they hunted.',
    ],
  },
  {
    date: 'August 15, 2022',
    title: 'Bears + Hogs on Cellular Cams',
    body: [
      'Yesterday we had bears all over our Tactacam Reveal Cellular cameras. Also lots of pigs moving in the daytime at 4 of our bait sites. 13 cellular cams sending hundreds of photos each day. Hunting pressure is low and we\'re busy getting food plots prepared for the upcoming season.',
    ],
  },
  {
    date: 'February 12, 2022',
    title: 'North Carolina Crew — 7 Hogs Already',
    body: [
      'Last night was a great night to be in the woods. 5 guys in camp right now from North Carolina — they\'ve harvested 7 hogs already. Still have open dates before the weather gets too hot. Currently monitoring over 20 trail cameras on our bait stations.',
    ],
  },
];

export default function DailyHuntReport() {
  return (
    <PageLayout
      pageTitle="Daily Hunt Report – Wild Hog Hunting Georgia Updates | Hog Wild USA"
      pageDescription="Real-time updates from our swamps at Hog Wild USA. Weekly reports on deer and hog activity, weather conditions, and recent harvests."
      eyebrow="From the Swamp"
      title="Daily Hunt Report"
      heroImage="/images/7_Wild_Hog_Hunts_Trophy_Quest_Farms.png"
    >
      <TwoColumn>
        <div>
          <Prose>
            <p>Welcome to our daily hog hunting report in Georgia. This is where you'll find the latest information about Hog Wild USA's hunts — what's going on in real-time in our swamps. Check back here often. For the most current trail-camera photos, visit our <a href="https://www.facebook.com/hogwildusa1/" target="_blank" rel="noreferrer" style={{ color: theme.accent, fontWeight: 600 }}>Facebook page</a>.</p>
          </Prose>

          <div style={{ marginTop: '72px' }}>
            <SectionHeading eyebrow="Recent Entries" title="Field Reports" />
            <div style={{ display: 'grid', gap: '40px', marginTop: '48px' }}>
              {ENTRIES.map((entry) => (
                <article
                  key={entry.date}
                  style={{
                    borderLeft: `3px solid ${theme.accent}`,
                    paddingLeft: '28px',
                  }}
                >
                  <time
                    style={{
                      fontFamily: theme.sans,
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: theme.accent,
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {entry.date}
                  </time>
                  <h3 style={{ fontFamily: theme.serif, fontSize: '26px', fontWeight: 500, color: theme.textDark, margin: '0 0 16px' }}>
                    {entry.title}
                  </h3>
                  <div style={{ fontFamily: theme.sans, fontSize: '15px', lineHeight: 1.75, color: theme.textDarkMuted }}>
                    {entry.body.map((p, i) => <p key={i} style={{ margin: '0 0 12px' }}>{p}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <ContactCard />
      </TwoColumn>
    </PageLayout>
  );
}
