import { fetchPosts } from "@/lib/fetchPosts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Posts from "@/components/Posts";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default async function Home() {
  // Server-side fetch happens at build time (Static Generation)
  const posts = await fetchPosts();

  return (
    <main className="relative z-10 px-4 max-w-6xl mx-auto">
      <Header />
      <Hero />
      <Projects />
      <Posts posts={posts} />
      <About />
      <Footer />
    </main>
  );
}
