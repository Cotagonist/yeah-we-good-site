import Header from '../components/Header';
import Projects from '../components/Projects';
import Posts from '../components/Posts';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="px-4 max-w-6xl mx-auto">
      <Header />
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">This is Matte.</h1>
        <p className="text-lg mb-6">
          Matte is a clean and minimalistic portfolio/blog template powered by Super.so and Notion.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded dark:bg-white dark:text-black">
          Buy Matte →
        </button>
      </section>
      <Projects />
      <Posts />
      <About />
      <Footer />
    </main>
  );
}
