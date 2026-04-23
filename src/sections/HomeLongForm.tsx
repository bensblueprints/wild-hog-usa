import { theme } from '../pages/theme';

const WHY = [
  {
    title: 'Top-Notch Hunting',
    body: "We're proud to offer some of the best hunting not only in Georgia, but in the entire southern region of the United States. Our hunting locations are full of wild boar and other game that you can take with the help of our guides. With the abundance of game in our area, your chances of harvesting a Georgia wild boar on one of our guided hog hunts in Georgia is high. Even if there's hunting available in your state, it's worth visiting stunning Southern Georgia to see what makes our hunting experiences so unique and special. Located in middle Georgia, just 1 hour south of Atlanta.",
  },
  {
    title: 'Customize Your Experience',
    body: "At Hog Wild USA, our all-inclusive hog hunts are never one size fits all. Instead, we make every effort to accommodate you and your party, providing the perfect hunting excursion for your unique needs. Traveling with a large group? We'll help create a high-energy atmosphere while ensuring that everyone is included in the hunt. Want a more intimate hunting experience with your child, best friend, or partner? We can make that happen as well.",
  },
  {
    title: 'Convenient Location',
    body: "Our hunting adventures are based just outside of Macon, Georgia. Our Southern Georgia location is about an hour south of Atlanta Hartsfield International Airport. This is one of the largest and busiest airports in the United States, so no matter where you're traveling from, there's a good chance you can get a direct flight here. We're also within driving distance of South Carolina, North Carolina, and Tennessee, as well as major cities in Florida and Alabama. While our hunts feel like an exclusive vacation, you don't have to drive far to experience them. If you already enjoy wild hog hunting in NC or wild boar hunting trips in Tennessee, you'll love our incredible Georgia hog hunts.",
  },
  {
    title: 'Thrilling Night Hunts',
    body: "We're able to offer safe and legal night hog hunting in Georgia. Going hunting at night takes the experience to another level. Searching for wild boar in the darkness is a true thrill that you and your friends will be talking about long after it's over. We even offer special lighting equipment to ensure that you won't scare the boars. Wild boar hunting trips in Georgia at night is a true bonding experience, and we're proud to offer some of the very best night hunting in the US. When compared with Tennessee hog hunting, our Southern Georgia hog hunting experience offers even more to enjoy.",
  },
  {
    title: 'Safe and Fun for Beginners',
    body: "Even if you're a total beginner, we make the wild hog hunting experience a fun and productive one for you. Our guides have years of experience and will help you stay safe while you're out on the hunt. We also always make sure to create a friendly and welcoming atmosphere for you and your party. Anyone can be a successful hunter with a bit of guidance, and we love sharing our passion for the sport with you. If necessary, we can even get you set up with top-notch equipment.",
  },
  {
    title: 'Beautiful Surroundings',
    body: "Our stunning Southern Georgia location is something you must see to believe. We have over 1000 acres of beautiful fields, forests, and swamps that you'll get to explore on this guided hog hunt in Georgia. If you're looking for a true getaway from the big city, going on one of our hunts is the perfect opportunity. You'll get to experience beautiful southern landscapes and truly wonderful hospitality. You can even stay at one of our camps, the perfect place to relax after a satisfying day of hunting.",
  },
  {
    title: 'Deer Hunting Options',
    body: "Prefer to hunt whitetail deer instead of a Wild Russian boar? We have you covered — we offer deer hunting trips in addition to wild boar hunting trips here at Hog Wild. Just as with our boar hunts, you'll find a huge number of whitetail deer here in Southern Georgia, making your chances of getting one high. So if you're looking to do some deer hunting in North Carolina, South Carolina, or Tennessee, you'll find that our deer hunting is worth traveling for — the experience is totally unique and memorable. Want to check out both deer and hogs? We offer all-inclusive hog hunts where you'll get to try your hand at hunting both.",
  },
  {
    title: 'Affordable Pricing',
    body: "We're committed to making every aspect of the hunting experience a great one, and that includes our reasonable pricing options. Hunting can get expensive, but our daily prices are reasonable and include not only the opportunity to hunt in one of the best areas in the country but also guidance by our expert team. You'll get amazing value for money that's hard to find in other southern hunting expeditions. We also frequently offer deals on our hunting excursions — keep checking back to see our latest deals and pricing.",
  },
];

export default function HomeLongForm() {
  return (
    <section
      className="lf-section"
      style={{
        backgroundColor: theme.bgLight,
        color: theme.textDark,
        padding: 'clamp(64px, 10vw, 120px) 24px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* 1000+ Acres */}
        <div style={{ maxWidth: '820px', margin: '0 auto 96px' }}>
          <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '3px', color: theme.accent, textTransform: 'uppercase', margin: 0 }}>
            Middle Georgia
          </p>
          <h2 style={{ fontFamily: theme.serif, fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400, lineHeight: 1.1, color: theme.textDark, margin: '12px 0 32px' }}>
            1000+ Acres of Land
          </h2>
          <div style={{ fontFamily: theme.sans, fontSize: '17px', lineHeight: 1.75, color: theme.textDark }}>
            <p>Whether you hunt in solitary, with a group of your buddies, or make everlasting memories with your kids, hunting is a long-standing and time-honored tradition that we at Hog Wild USA take seriously. Here at Georgia Wild Hog Hunts, we are happy to be part of that history and provide our customers with memorable wild hog hunting in Georgia. With our enormous Russian boars or our great big whitetail deer, coyotes, and turkey, there's enough on the 1000+ acres of land here at Hog Wild USA to create an amazing hunting trip no matter what kind of hunter you are. Explore our site and pick the hunting trip that's right for you.</p>
            <p>First time hunting? Not a problem. Our hunts all come with a guide, and we take great care to make sure you and your party have a safe and successful hunt. We can accommodate groups up to 12 in each of our hunting lodges. If you're not sure you'll love it and don't want to make the commitment for all the gear and firearms, we can rent you all you need — the gun (rifle or shotgun and ammo), as well as optics and a night-hunt mounted flashlight. We have both single and father-son combo hunting stands available. Let us know when you book, and we'll do our best to make it happen. Here in the south, we are nothing if we aren't accommodating.</p>
            <p>And for those who don't know, this is the best time of year to get a trophy-size boar on one of our wild boar hunting trips.</p>
          </div>
        </div>

        {/* Night Hunts band */}
        <div
          className="lf-band"
          style={{
            backgroundColor: theme.bg,
            color: theme.text,
            padding: 'clamp(48px, 6vw, 72px) clamp(24px, 4vw, 48px)',
            marginBottom: 'clamp(64px, 8vw, 96px)',
            borderLeft: `4px solid ${theme.accent}`,
          }}
        >
          <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '3px', color: theme.accent, textTransform: 'uppercase', margin: 0 }}>
            After Dark
          </p>
          <h3 style={{ fontFamily: theme.serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, lineHeight: 1.15, color: theme.text, margin: '12px 0 24px', textWrap: 'balance' }}>
            Hunt Russian Boars at Night
          </h3>
          <div style={{ fontFamily: theme.sans, fontSize: '16px', lineHeight: 1.8, color: theme.textMuted, maxWidth: '820px' }}>
            <p>Hog Wild USA has some of the largest Russian boars that can be found in South Georgia. Our guided hog hunts are the best hunts you will ever go on. Lots of hogs have been seen and taken on our swamp hunts in the last few weeks. Several exceptional boars have been taken by our guests.</p>
            <p>We offer thrilling nighttime hunts with green lights that do not spook the game — legal in Georgia. Our night hog hunting is extremely successful. If you've never done a night hunt, let us show you why it's one of the best experiences you could have as a hunter.</p>
            <p>
              Call us today at{' '}
              <a href="tel:478-256-3448" style={{ color: theme.accent, fontWeight: 600 }}>
                (478) 256-3448
              </a>{' '}
              to book your trip or{' '}
              <a href="/book-a-hunt" style={{ color: theme.accent, fontWeight: 600 }}>
                book online
              </a>{' '}
              to secure your spot.
            </p>
          </div>
        </div>

        {/* Location */}
        <div style={{ maxWidth: '820px', margin: '0 auto 96px' }}>
          <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '3px', color: theme.accent, textTransform: 'uppercase', margin: 0 }}>
            Getting Here
          </p>
          <h2 style={{ fontFamily: theme.serif, fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400, lineHeight: 1.1, color: theme.textDark, margin: '12px 0 32px' }}>
            Where's the Location?
          </h2>
          <div style={{ fontFamily: theme.sans, fontSize: '17px', lineHeight: 1.75, color: theme.textDark }}>
            <p>Hog Wild USA is located near Macon, Georgia, about an hour south of Atlanta. Whether you're driving or flying in from out of state, we are easily accessible. Hog Wild USA's land includes portions of the Ocmulgee River swamps which have been hunted by the Creek Indians for thousands of years. Our lands adjoin portions of the Bond Swamp National Wildlife Refuge at the south end of the refuge, where some of the best wild boar hunting trips in Georgia can be experienced.</p>
          </div>
        </div>

        {/* Why Choose grid */}
        <div style={{ marginBottom: '96px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '3px', color: theme.accent, textTransform: 'uppercase', margin: 0 }}>
              Southeastern USA's Hog Hunting Destination
            </p>
            <h2 style={{ fontFamily: theme.serif, fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400, lineHeight: 1.1, color: theme.textDark, margin: '12px 0 0', textWrap: 'balance' }}>
              Why Hunters Choose Hog Wild USA
            </h2>
          </div>

          <p style={{ fontFamily: theme.sans, fontSize: '16px', lineHeight: 1.75, color: theme.textDark, maxWidth: '820px', margin: '0 auto 56px' }}>
            Wild pig hunting is a time-honored tradition in the South, and when you're investing time and money in a hunt, you want it to be an experience to remember. Hog Wild USA has established itself as a leader in the hunting tourism industry by providing a variety of unique hunting trips that can be customized to suit your needs. Here's why hunters are flocking to wild hog hunting in Georgia for premium experiences.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {WHY.map((item, i) => (
              <div
                key={item.title}
                style={{
                  padding: '32px',
                  backgroundColor: theme.bgLightAlt,
                  borderTop: `3px solid ${theme.accent}`,
                }}
              >
                <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '2px', color: theme.accent, margin: 0 }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 style={{ fontFamily: theme.serif, fontSize: '24px', fontWeight: 500, color: theme.textDark, margin: '10px 0 14px', lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: theme.sans, fontSize: '14.5px', lineHeight: 1.7, color: theme.textDarkMuted, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sounders + fair chase */}
        <div style={{ maxWidth: '820px', margin: '0 auto 96px' }}>
          <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '3px', color: theme.accent, textTransform: 'uppercase', margin: 0 }}>
            100% Fair Chase
          </p>
          <h2 style={{ fontFamily: theme.serif, fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400, lineHeight: 1.1, color: theme.textDark, margin: '12px 0 32px', textWrap: 'balance' }}>
            Sounders of Trophy Russian Boar
          </h2>
          <div style={{ fontFamily: theme.sans, fontSize: '17px', lineHeight: 1.75, color: theme.textDark }}>
            <p>Sounders — a group of wild boar with 8–12 hogs — can often be seen on our hog hunting trips. Our Georgia wild boar hunting trips and combo hog-and-deer hunts provide an opportunity to hunt some of the largest Russian-strain wild boar and whitetail deer that can be found in the Southeast. Our hogs are direct descendants of the largest truly wild Russian boars. Some of our trophy wild boar weigh in excess of 350 pounds. Our guided hog hunts in Georgia are 100% fair chase.</p>
            <p>Hunting is about making memories. It's a tradition which has been passed down through the ages, and it's a history you can participate in. We at Hog Wild USA want to ensure you have a trip to remember for the rest of your life. Whether you're hunting with your kids or taking a weekend hunt with friends, you don't want to miss the chance to enjoy some of the best wild boar hunting in the Southeastern United States.</p>
            <p>We guarantee our wild hog hunting in Georgia won't let you down. And that's not all — we offer guided hunting trips for whitetail deer, wild hogs, turkey, coyotes, and bobcats.</p>
            <p>Perhaps you're planning a bachelor party hog hunt with a group of your closest buddies. This is a fantastic way to appreciate each other while enjoying a rewarding experience. Let us set up one of our night hunts to get your group's adrenaline pumping. We'll make sure you're prepared with one of our green lights so you don't spook the boar.</p>
            <p>We have a variety of wild boar and deer hunts. You tell us what you're looking for in advance and we will do everything in our power to make it happen. If you're visiting with your kids, we'll recommend our father-son or father-daughter hunting stands to help provide the best experience. We also have a Georgia hunting club you can join for an exceptional year-round hunting experience.</p>
          </div>
        </div>

        {/* Gift Certificates */}
        <div
          className="lf-card"
          style={{
            padding: 'clamp(40px, 5vw, 56px)',
            backgroundColor: theme.bgLightAlt,
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '3px', color: theme.accent, textTransform: 'uppercase', margin: 0 }}>
            Gift Certificates
          </p>
          <h3 style={{ fontFamily: theme.serif, fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.2, color: theme.textDark, margin: '12px 0 20px', textWrap: 'balance' }}>
            Gift the ultimate hog-hunting trip
          </h3>
          <p style={{ fontFamily: theme.sans, fontSize: '16px', lineHeight: 1.7, color: theme.textDarkMuted, maxWidth: '640px', margin: '0 auto 24px' }}>
            For your husband, brother, sister, son, or daughter. Go hunting with Dad one more time. Gift certificates are available in any amount, year-round — they never expire.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 32px', maxWidth: '560px', textAlign: 'left', fontFamily: theme.sans, fontSize: '15px', lineHeight: 2, color: theme.textDark }}>
            <li>— <strong>$325/day</strong> — Georgia hog hunts, hogs only</li>
            <li>— <strong>$1,495</strong> — 2.5-day hunt with 3 night-time hog hunts, lodging & food</li>
            <li>— <strong>$1,295</strong> — Skinny Package (lodging included, food & animal cleaning not)</li>
          </ul>
          <a
            href="tel:478-256-3448"
            style={{
              display: 'inline-block',
              fontFamily: theme.sans,
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '16px 40px',
              borderRadius: '2px',
              backgroundColor: theme.accent,
              color: theme.bg,
            }}
          >
            Call to Purchase — 478.256.3448
          </a>
        </div>

        {/* Email change notice */}
        <div
          style={{
            padding: '28px 32px',
            backgroundColor: '#fff',
            borderLeft: `3px solid ${theme.accent}`,
            maxWidth: '820px',
            margin: '0 auto',
          }}
        >
          <p style={{ fontFamily: theme.sans, fontSize: '11px', fontWeight: 600, letterSpacing: '2px', color: theme.accent, textTransform: 'uppercase', margin: 0 }}>
            Our Email Has Changed
          </p>
          <p style={{ fontFamily: theme.sans, fontSize: '14.5px', color: theme.textDarkMuted, lineHeight: 1.7, margin: '10px 0 0' }}>
            Our email has been changed to <strong>tomhaskins@hogwildusa.com</strong>. We no longer have access to our bellsouth.net email addresses. Please update this new email in your address book.
          </p>
        </div>
      </div>
    </section>
  );
}
