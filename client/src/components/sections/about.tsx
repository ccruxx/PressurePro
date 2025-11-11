import JoshPicture from "@assets/JoshPicture.jpg";
import logo2 from "@assets/logo2.png";

export default function About() {
  const features = [
    {
      icon: "fas fa-certificate",
      title: "Licensed & Insured",
      description:
        "Fully licensed, bonded, and insured for your peace of mind and protection.",
    },
    {
      icon: "fas fa-tools",
      title: "Professional Equipment",
      description:
        "State-of-the-art pressure washing equipment for superior results and efficiency.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "100% Satisfaction Guarantee",
      description:
        "We stand behind our work with a complete satisfaction guarantee on every job.",
    },
    {
      icon: "fas fa-leaf",
      title: "Eco-Friendly Solutions",
      description:
        "Environmentally safe cleaning products that protect your property and surroundings.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose DFW Pristine Power Washing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              With over a decade of experience, DFW Pristine Power Washing is
              trusted throughout the Dallas-Fort Worth area for delivering
              exceptional results, reliable service, and customer-first care.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <i className={`${feature.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Founder Caption */}
          <div className="relative">
            <img
              src={JoshPicture}
              alt="Joshua Collins, founder of DFW Pristine Power Washing"
              className="rounded-lg shadow-2xl w-full"
              loading="lazy"
              decoding="async"
            />

            <div className="mt-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Joshua Collins
              </h3>
              <p className="text-lg md:text-xl text-blue-600 font-semibold mt-1">
                Founder & Owner, DFW Pristine Power Washing
              </p>
              <p className="text-sm text-gray-600 italic mt-1">
                “Proudly restoring homes & businesses across DFW.”
              </p>
            </div>
          </div>
        </div>

        {/* Logo & Badges */}
        <div className="mt-20 text-center">
          <img
            src={logo2}
            alt="DFW Pristine Power Washing Logo"
            className="mx-auto h-24 w-auto mb-10"
            loading="lazy"
            decoding="async"
          />

          <div className="flex justify-center items-center gap-6 flex-wrap">
            {/* Locally Owned Badge */}
            <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-md min-w-[140px]">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  Locally Owned
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  DFW-Based Business
                </div>
              </div>
            </div>

            {/* Fully Insured Badge */}
            <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-md min-w-[140px]">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Insured</div>
                <div className="text-sm text-gray-600 mt-1">
                  Licensed & Covered
                </div>
              </div>
            </div>

            {/* Satisfaction Badge (Optional) */}
            <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-md min-w-[140px]">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
