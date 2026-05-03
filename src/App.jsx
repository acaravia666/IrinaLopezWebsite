import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Store from './components/Store';
import LeadMagnet from './components/LeadMagnet';
import BlogPreview from './components/BlogPreview';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ParallaxBreak from './components/ParallaxBreak';

const BlogPage = lazy(() => import('./pages/BlogPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function HomePage() {
  return (
    <div className="bg-brand-cream min-h-screen font-body relative overflow-x-hidden text-brand-ink">
      <Navbar />
      <Hero />
      <About />
      <ParallaxBreak
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop"
        height="h-[70vh]"
        tint="bg-brand-gold/20"
      />
      <Services />
      <Store />
      <LeadMagnet />
      <ParallaxBreak
        image="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2670&auto=format&fit=crop"
        height="h-[75vh]"
        tint="bg-brand-terracotta/20"
      />
      <BlogPreview />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-brand-cream" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
