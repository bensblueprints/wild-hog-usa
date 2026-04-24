import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Manifesto from './sections/Manifesto';
import Tiers from './sections/Tiers';
import HomeLongForm from './sections/HomeLongForm';
import Footer from './sections/Footer';
import BookingCTA from './sections/BookingCTA';
import ParchmentUnroll from './effects/ParchmentUnroll';
import AboutOurHunts from './pages/AboutOurHunts';
import WildBoarHunting from './pages/WildBoarHunting';
import GuidedWildHogHunts from './pages/GuidedWildHogHunts';
import BookAHunt from './pages/BookAHunt';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import DailyHuntReport from './pages/DailyHuntReport';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ProductDetail from './pages/ProductDetail';
import { siteConfig } from './config';

function HomePage() {
  return (
    <>
      <Navigation />
      <ParchmentUnroll />
      <main>
        <Hero />
        <Manifesto />
        <Tiers />
        <HomeLongForm />
        <BookingCTA />
        <Footer />
      </main>
    </>
  );
}

function App() {
  useLenis();
  const location = useLocation();

  useEffect(() => {
    document.title = siteConfig.siteTitle || '';
    document.documentElement.lang = siteConfig.language || '';

    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = siteConfig.siteDescription || '';
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-our-hunts" element={<AboutOurHunts />} />
      <Route path="/wild-boar-hunting" element={<WildBoarHunting />} />
      <Route path="/guided-wild-hog-hunts" element={<GuidedWildHogHunts />} />
      <Route path="/book-a-hunt" element={<BookAHunt />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/daily-hunt-report" element={<DailyHuntReport />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/products/:slug" element={<ProductDetail />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
