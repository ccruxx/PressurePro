import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import GallerySection from "@/components/sections/gallery";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/schema-helpers";
import { WORK_IMAGES } from "@/lib/work-images";

export default function GalleryPage() {
  const schema = [
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Gallery", url: "/gallery" },
    ]),
    getLocalBusinessSchema(),
  ];

  return (
    <div className="bg-canvas">
      <SEOHead
        title={`Before & After Gallery | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`${WORK_IMAGES.length} photographs of real pressure washing, soft washing and delicate stone work across the DFW metroplex. Filter by surface.`}
        canonical="/gallery"
      />
      <SchemaOrg schema={schema} />
      <Header />
      <main className="min-h-screen pt-header">
        <GallerySection headingLevel={1} />
      </main>
      <Footer />
    </div>
  );
}
