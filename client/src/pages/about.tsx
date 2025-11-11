import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";
import { Shield, Award, Clock, ThumbsUp } from "lucide-react";

export default function About() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ]);

  const localBusiness = getLocalBusinessSchema();

  return (
    <div className="font-sans bg-slate-50">
      <SEOHead
        title={`About Us - Professional Pressure Washing | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Learn about ${SEO_CONSTANTS.BUSINESS_NAME}. ${SEO_CONSTANTS.OWNER.YEARS_IN_BUSINESS} years serving DFW with professional pressure washing, house washing, and exterior cleaning services. Licensed, insured, and trusted.`}
        canonical="/about"
      />
      <SchemaOrg schema={[breadcrumbs, localBusiness]} />
      
      <Header />
      
      <main className="min-h-screen pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" data-testid="heading-about-title">
              About {SEO_CONSTANTS.BUSINESS_NAME}
            </h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                For over {SEO_CONSTANTS.OWNER.YEARS_IN_BUSINESS} years, {SEO_CONSTANTS.BUSINESS_NAME} has been the trusted choice for professional pressure washing and exterior cleaning services throughout the Dallas-Fort Worth metro area. Founded by {SEO_CONSTANTS.OWNER.NAME}, our company was built on a simple principle: deliver exceptional results with honest service and fair pricing.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What started as a one-person operation has grown into a full-service pressure washing company serving hundreds of satisfied customers across Midlothian, Waxahachie, Cedar Hill, Mansfield, and the entire DFW region.
              </p>
              <p className="text-lg text-gray-700">
                Every member of our team shares the same commitment to quality and customer satisfaction. We treat every property—whether it's a small residential driveway or a large commercial building—with the same attention to detail and professionalism.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-700">
                      Fully licensed, bonded, and insured for your protection. We carry comprehensive liability coverage and worker's compensation insurance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{SEO_CONSTANTS.OWNER.YEARS_IN_BUSINESS} Years Experience</h3>
                    <p className="text-gray-700">
                      Backed by years of hands-on experience and hundreds of successful projects across residential and commercial properties.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fast, Reliable Service</h3>
                    <p className="text-gray-700">
                      Most jobs scheduled within 2-5 days. We respect your time and show up when we say we will.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <ThumbsUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">5-Star Reviews</h3>
                    <p className="text-gray-700">
                      Our reputation speaks for itself. Read our reviews to see why customers choose us again and again.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Safety & Methods</h2>
              <p className="text-lg text-gray-700 mb-4">
                We use industry-leading equipment and techniques to deliver superior results while protecting your property:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Soft Wash for Delicate Surfaces:</strong> Low-pressure cleaning for siding, stucco, roofs, and painted surfaces prevents damage while effectively removing organic growth.</li>
                <li><strong>High-Pressure for Hard Surfaces:</strong> Commercial-grade pressure washers tackle concrete, brick, and stone with the power needed to remove years of buildup.</li>
                <li><strong>Eco-Friendly Solutions:</strong> We use biodegradable cleaning agents that are safe for your landscaping, pets, and family.</li>
                <li><strong>Professional Equipment:</strong> Top-tier commercial pressure washers and soft wash systems ensure consistent, reliable results.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Service Guarantee</h2>
              <p className="text-lg text-gray-700 mb-4">
                We stand behind our work with a satisfaction guarantee. If you're not completely happy with the results, we'll make it right—no questions asked.
              </p>
              <p className="text-lg text-gray-700">
                When you choose {SEO_CONSTANTS.BUSINESS_NAME}, you're choosing a local business that cares about our community and our reputation. We're not satisfied until you're thrilled with the transformation of your property.
              </p>
            </div>

            <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6">
                Call us today for a free, no-obligation quote
              </p>
              <p className="text-2xl font-bold mb-2">
                <a href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`} className="hover:text-gray-200 transition-colors" data-testid="link-call">
                  {SEO_CONSTANTS.CONTACT.PHONE}
                </a>
              </p>
              <p className="text-lg">
                or email us at{" "}
                <a href={`mailto:${SEO_CONSTANTS.CONTACT.EMAIL}`} className="hover:text-gray-200 transition-colors underline" data-testid="link-email">
                  {SEO_CONSTANTS.CONTACT.EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
