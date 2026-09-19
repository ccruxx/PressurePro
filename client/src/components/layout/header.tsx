import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import logoImage from "@assets/logo2.png";
import { SEO_CONSTANTS, STONE_TYPES } from "@/lib/seo-constants";

const STONE_HUB = "/services/delicate-stone-cleaning";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | "areas" | null>(null);
  const [location] = useLocation();
  const isHomePage = location === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLink =
    "inline-flex items-center py-3 text-ink-soft transition-colors hover:text-brand focus-visible:text-brand";

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-surface/90 backdrop-blur transition-[border-color,box-shadow] ${
        isScrolled ? "border-stone-200 shadow-sm" : "border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-gutter" aria-label="Main">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" aria-label={`${SEO_CONSTANTS.BUSINESS_NAME} home`}>
            <img
              src={logoImage}
              alt={`${SEO_CONSTANTS.BUSINESS_NAME} logo`}
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop navigation ------------------------------------------- */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link href="/" className={navLink}>
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 py-6 ${navLink}`}
                data-testid="nav-services"
              >
                Services
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </Link>
              {openMenu === "services" && (
                <div className="absolute left-0 top-full w-72 border border-stone-200 bg-surface py-2 shadow-lg">
                  {SEO_CONSTANTS.PRIMARY_SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-5 py-2.5 text-ink-soft transition-colors hover:bg-surface-sunken hover:text-brand"
                      data-testid={`nav-service-${service.slug}`}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-stone-200" />
                  <p className="px-5 pb-1 text-step--1 font-medium text-ink-faint">
                    By stone type
                  </p>
                  {STONE_TYPES.map((stone) => (
                    <Link
                      key={stone.slug}
                      href={`${STONE_HUB}/${stone.slug}`}
                      className="block px-5 py-2 text-step--1 text-ink-soft transition-colors hover:bg-surface-sunken hover:text-brand"
                      data-testid={`nav-stone-${stone.slug}`}
                    >
                      {stone.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("areas")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href="/service-areas"
                className={`flex items-center gap-1 py-6 ${navLink}`}
                data-testid="nav-service-areas"
              >
                Service Areas
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </Link>
              {openMenu === "areas" && (
                <div className="absolute left-0 top-full max-h-96 w-64 overflow-y-auto border border-stone-200 bg-surface py-2 shadow-lg">
                  {SEO_CONSTANTS.SERVICE_AREA_CITIES.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="block px-5 py-2 text-ink-soft transition-colors hover:bg-surface-sunken hover:text-brand"
                      data-testid={`nav-city-${city.slug}`}
                    >
                      {city.name}, {city.state}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection("gallery")} className={navLink}>
              Gallery
            </button>
            <Link href="/about" className={navLink}>
              About
            </Link>
          </div>

          {/* Actions ------------------------------------------------------- */}
          <div className="flex items-center gap-3">
            <a
              href={SEO_CONSTANTS.CONTACT.PHONE_TEL}
              className="hidden items-center gap-2 font-medium text-ink transition-colors hover:text-brand md:flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SEO_CONSTANTS.CONTACT.PHONE}
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden bg-brand px-5 py-2.5 font-medium text-white transition-colors hover:bg-brand-strong sm:block"
            >
              Get a quote
            </button>

            <button
              className="-mr-2 p-2 lg:hidden"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-ink" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-ink" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation --------------------------------------------- */}
        {isMobileMenuOpen && (
          <div className="border-t border-stone-200 py-6 lg:hidden">
            <div className="flex flex-col gap-1">
              <Link href="/" className="py-2 text-step-1">
                Home
              </Link>
              <Link href="/services" className="py-2 text-step-1">
                Services
              </Link>
              {SEO_CONSTANTS.PRIMARY_SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="py-1.5 pl-4 text-ink-soft"
                >
                  {service.name}
                </Link>
              ))}
              <Link href={STONE_HUB} className="py-1.5 pl-4 text-ink-soft">
                Stone types
              </Link>
              <Link href="/service-areas" className="mt-2 py-2 text-step-1">
                Service Areas
              </Link>
              <Link href="/about" className="py-2 text-step-1">
                About
              </Link>
              <button
                onClick={() => scrollToSection("gallery")}
                className="py-2 text-left text-step-1"
              >
                Gallery
              </button>

              <a
                href={SEO_CONSTANTS.CONTACT.PHONE_TEL}
                className="mt-4 inline-flex items-center gap-2 bg-brand px-5 py-3 font-medium text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SEO_CONSTANTS.CONTACT.PHONE}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
