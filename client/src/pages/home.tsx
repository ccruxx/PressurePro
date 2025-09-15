import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import FeaturedVideo from "@/components/sections/featured-video";
import Services from "@/components/sections/services";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="font-sans bg-slate-50">
      <Header />
      <Hero />
      <FeaturedVideo />
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
