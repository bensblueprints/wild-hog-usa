import PageLayout from './PageLayout';
import { theme } from './theme';

const IMAGES = [
  { src: '/images/1_Diehard_Hog_Hunter_Takes_a_Giant.png', alt: 'Diehard hog hunter with giant trophy boar' },
  { src: '/images/2_Diehard_Hog_Hunter_Takes_a_Giant.png', alt: 'Hunter celebrating a trophy Russian boar' },
  { src: '/images/3_Trophy_Hunting_Georgia_Swamplands.png', alt: 'Trophy hunting the Georgia swamplands' },
  { src: '/images/4_HOG_WILD_USA_Updated_April_2026_10.png', alt: 'Hog Wild USA hunters group photo' },
  { src: '/images/5_Georgia_Wild_Hog_Hunts_Georgia_Hog.png', alt: 'Georgia wild hog taken on a guided hunt' },
  { src: '/images/6_Hog_Hunting_Gopher_Plantation.png', alt: 'Hog hunt on Gopher Plantation, Middle Georgia' },
  { src: '/images/7_Wild_Hog_Hunts_Trophy_Quest_Farms.png', alt: 'Wild hog hunts on Trophy Quest Farms' },
  { src: '/images/8_Hunting_Lodge_Gopher_Plantation.png', alt: 'Hog Wild USA hunting lodge on Gopher Plantation' },
  { src: '/images/9_Hog_Hunting_Outfitters_Georgia_Guided.png', alt: 'Hog Wild USA guides and hunters on a guided hunt' },
];

export default function Gallery() {
  return (
    <PageLayout
      pageTitle="Gallery – Wild Hog Hunting Georgia in Action | Hog Wild USA"
      pageDescription="Photos from guided wild hog hunts at Hog Wild USA in Middle Georgia. Trophy Russian boar, whitetail deer, and the new lodge."
      eyebrow="Wild Hog Hunting Georgia — In Action"
      title="Gallery"
      heroImage="/images/4_HOG_WILD_USA_Updated_April_2026_10.png"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {IMAGES.map((img) => (
          <figure
            key={img.src}
            style={{
              margin: 0,
              overflow: 'hidden',
              backgroundColor: theme.bg,
              aspectRatio: '4 / 3',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.8s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget.style.transform = 'scale(1.04)'); }}
              onMouseLeave={(e) => { (e.currentTarget.style.transform = 'scale(1)'); }}
            />
          </figure>
        ))}
      </div>
      <p
        style={{
          fontFamily: theme.sans,
          fontSize: '14px',
          color: theme.textDarkMuted,
          marginTop: '48px',
          textAlign: 'center',
        }}
      >
        For the most recent trail-camera photos, visit our{' '}
        <a href="https://www.facebook.com/hogwildusa1/" target="_blank" rel="noreferrer" style={{ color: theme.accent, fontWeight: 600 }}>
          Facebook page
        </a>.
      </p>
    </PageLayout>
  );
}
