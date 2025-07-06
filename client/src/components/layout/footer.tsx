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
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
                  {/* Pressure washer wand */}
                  <rect x="2" y="14" width="20" height="4" rx="2" fill="currentColor" />
                  <circle cx="22" cy="16" r="3" fill="currentColor" />
                  {/* Water streams */}
                  <path d="M22 13 L28 8 M22 16 L30 16 M22 19 L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold leading-tight">DFW PRISTINE</span>
                <div className="text-sm font-semibold text-primary">POWER WASHING</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional pressure washing services that transform your property and exceed your expectations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <i className="fab fa-google text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <i className="fab fa-yelp text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Residential Cleaning</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Commercial Cleaning</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Vehicle & Equipment</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Soft Washing</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Eco-Friendly Options</button></li>

            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Gallery</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-primary"></i>
                <span>(817) 585-6388</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <span>dfwpristinepowerwashing@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>DFW Metro Area Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-clock text-primary"></i>
                <span>Mon-Sat: 7AM-7PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 DFW Pristine Power Washing. All rights reserved. | Licensed, Bonded & Insured</p>
        </div>
      </div>
    </footer>
  );
}
