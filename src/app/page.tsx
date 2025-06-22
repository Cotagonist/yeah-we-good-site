'use client';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Posts from '../components/Posts';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative z-10 px-4 max-w-6xl mx-auto">
      <Header />
      <Hero />
      <Projects />
      <Posts />
      <About />
      <Footer />
    </main>
  );
}
