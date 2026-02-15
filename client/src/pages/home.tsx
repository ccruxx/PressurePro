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
        title={`Residential Power Washing & Pressure Washing in DFW | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Residential pressure washing and power washing for driveways, patios, porches, roofs, and gutters across Colleyville, Southlake, Grapevine, Dallas, Fort Worth, Euless, Bedford, Plano, Carrollton, Addison, Farmers Branch, Coppell, Arlington, and Mansfield. Call ${SEO_CONSTANTS.CONTACT.PHONE} for a free quote.`}
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
