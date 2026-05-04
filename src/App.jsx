import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Store from './components/Store';
import LeadMagnet from './components/LeadMagnet';
import Lanzamientos from './components/Lanzamientos';
import Testimonios from './components/Testimonios';
import BlogPreview from './components/BlogPreview';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ParallaxBreak from './components/ParallaxBreak';
import ScrollToTop from './components/ScrollToTop';

const BlogPage = lazy(() => import('./pages/BlogPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const LinktreePage = lazy(() => import('./pages/LinktreePage'));

function HomePage() {
  return (
    <div className="bg-brand-cream min-h-screen font-body relative overflow-x-hidden text-brand-ink">
      <Navbar />
      <Hero />
      <About />
      <ParallaxBreak
        image="/parallax-break-uno.webp"
        height="h-[50vh] lg:h-[90vh]"
        tint="bg-brand-gold/20"
        position="top"
      />
      <Services />
      <Store />
      <LeadMagnet />
      <ParallaxBreak
        image="/ParallaxBreak2.webp"
        height="h-[50vh] lg:h-[90vh]"
        tint="bg-brand-terracotta/20"
      />
      <Lanzamientos />
      <BlogPreview />
      <Testimonios />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-brand-cream" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/linktree" element={<LinktreePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
