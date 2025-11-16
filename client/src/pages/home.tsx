import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import FeaturedVideo from "@/components/sections/featured-video";
import ServingCities from "@/components/sections/serving-cities";
import Services from "@/components/sections/services";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import About from "@/components/sections/about";
import Certification from "@/components/sections/certification";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getLocalBusinessSchema } from "@/lib/schema-helpers";

export default function Home() {
  const localBusinessSchema = getLocalBusinessSchema();
  
  return (
    <div className="font-sans bg-slate-50">
      <SEOHead
        title={`Pressure Washing in ${SEO_CONSTANTS.PRIMARY_CITY} & DFW | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Minority-Owned & Choctaw Nation Certified professional pressure washing in Arlington, Mansfield, Dallas, Fort Worth & all of DFW. House washing, roof cleaning, driveway cleaning. Free quotes, same-week service. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
        canonical="/"
      />
      <SchemaOrg schema={localBusinessSchema} />
      
      <Header />
      <Hero />
      <ServingCities />
      <FeaturedVideo />
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}
