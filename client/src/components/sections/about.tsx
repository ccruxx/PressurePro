import JoshPicture from "@assets/JoshPicture.png";
export default function About() {
  const features = [
    {
      icon: "fas fa-certificate",
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind and protection."
    },
    {
      icon: "fas fa-tools",
      title: "Professional Equipment",
      description: "State-of-the-art pressure washing equipment for superior results and efficiency."
    },
    {
      icon: "fas fa-shield-alt",
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work with a complete satisfaction guarantee on every job."
    },
    {
      icon: "fas fa-leaf",
      title: "Eco-Friendly Solutions",
      description: "Environmentally safe cleaning products that protect your property and surroundings."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose AquaClean Pro?</h2>
            <p className="text-xl text-gray-600 mb-8">
              With over 10 years of experience in professional pressure washing, we've built our reputation 
              on delivering exceptional results and outstanding customer service.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <i className={`${feature.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={JoshPicture}
              alt="Professional pressure washing team with commercial equipment"
              className="rounded-lg shadow-2xl w-full"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-success text-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">A+</div>
                <div className="text-sm">BBB Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
