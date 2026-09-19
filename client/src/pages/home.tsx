import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import FocusAreas from "@/components/sections/focus-areas";
import ServingCities from "@/components/sections/serving-cities";
import Services from "@/components/sections/services";
import InstantQuote from "@/components/sections/instant-quote";
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
    <div className="bg-canvas">
      <SEOHead
        title={`Pressure Washing & Exterior Cleaning in DFW | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Soft washing, pressure washing, roof and gutter cleaning, delicate stone restoration and commercial work across the DFW metroplex. Based in ${SEO_CONSTANTS.NAP.CITY}. Call ${SEO_CONSTANTS.CONTACT.PHONE} for a free quote.`}
        canonical="/"
      />
      <SchemaOrg schema={localBusinessSchema} />

      <Header />
      <Hero />
      <Services />
      <FocusAreas />
      <Gallery limit={8} />
      <Testimonials />
      <InstantQuote />
      <ServingCities />
      <About />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}
