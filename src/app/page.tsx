import Comments from "@/components/Comments";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SignUpSection from "@/components/SignUpSection";

export default function Home() {
  return (
   <main>
      
        <Hero />
        <Features />
        <Comments />
        <SignUpSection />
        <Footer />
    </main>
  );
}
