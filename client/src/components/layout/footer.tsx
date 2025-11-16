import { Link } from "wouter";
import logoImage from "@assets/logo2.png";
import { SEO_CONSTANTS } from "@/lib/seo-constants";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src={logoImage}
                alt="DFW Pristine Power Washing Logo"
                className="h-24 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional pressure washing services that transform your
              property and exceed your expectations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578681147252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                data-testid="facebook-link"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://share.google/FqAUHWw5ykceLj5Jr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                data-testid="google-business-link"
              >
                <i className="fab fa-google text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <i className="fab fa-yelp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              {SEO_CONSTANTS.PRIMARY_SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-primary transition-colors"
                    data-testid={`footer-service-${service.slug}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              {SEO_CONSTANTS.SERVICE_AREA_CITIES.slice(0, 6).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="hover:text-primary transition-colors"
                    data-testid={`footer-city-${city.slug}`}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="hover:text-primary transition-colors font-semibold"
                  data-testid="footer-all-areas"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - NAP Block */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300 mb-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-building text-primary mt-1"></i>
                <div>
                  <div className="font-semibold text-white">{SEO_CONSTANTS.BUSINESS_NAME}</div>
                  <div>{SEO_CONSTANTS.NAP.CITY}, {SEO_CONSTANTS.NAP.STATE}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-primary"></i>
                <a href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`} className="hover:text-primary transition-colors" data-testid="footer-phone">
                  {SEO_CONSTANTS.CONTACT.PHONE}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <a href={`mailto:${SEO_CONSTANTS.CONTACT.EMAIL}`} className="hover:text-primary transition-colors" data-testid="footer-email">
                  {SEO_CONSTANTS.CONTACT.EMAIL}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-clock text-primary"></i>
                <span>{SEO_CONSTANTS.HOURS}</span>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173190.58006905862!2d-97.297362!3d32.802955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9929aefddf83%3A0xdda59dbc56a64a6b!2sDallas-Fort%20Worth%20Metroplex!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DFW Pristine Power Washing - Arlington, TX"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; 2024 DFW Pristine Power Washing. All rights reserved. |
            Licensed, Bonded & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
