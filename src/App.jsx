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

function App() {
  return (
    <div className="bg-brand-calming-white min-h-screen font-body relative overflow-x-hidden text-brand-oil">
      <Navbar />
      <Hero />
      <About />
      <ParallaxBreak image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop" height="h-[70vh]" overlay="bg-brand-warm-gold/30" />
      <Services />
      <Store />
      <LeadMagnet />
      <ParallaxBreak image="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2670&auto=format&fit=crop" height="h-[75vh]" overlay="bg-brand-well-read/35" />
      <BlogPreview />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
