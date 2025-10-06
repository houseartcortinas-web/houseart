import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Products />
      <Contact />
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default Index;
