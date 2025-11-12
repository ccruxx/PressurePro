import { Award, Shield } from "lucide-react";

export default function Certification() {
  return (
    <section id="certification" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              {/* Left Side - Emblem */}
              <div className="flex justify-center items-center">
                <div className="relative">
                  {/* Placeholder Emblem - Can be replaced with actual Choctaw seal */}
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl border-8 border-white">
                    <div className="text-center text-white">
                      <Shield className="w-24 h-24 mx-auto mb-3" strokeWidth={1.5} />
                      <div className="text-sm font-semibold tracking-wide">CHOCTAW NATION</div>
                      <div className="text-xs mt-1 opacity-90">OF OKLAHOMA</div>
                      <div className="text-2xl font-bold mt-2">CERTIFIED</div>
                    </div>
                  </div>
                  {/* Decorative Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 rounded-full p-4 shadow-lg">
                    <Award className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div>
                <div className="inline-block mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Official Certification
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Proudly Minority-Owned & Tribal Certified
                </h2>
                
                <div className="h-1 w-20 bg-blue-600 rounded mb-6"></div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  DFW Pristine Power Washing is proudly certified as a <strong>Minority-Owned Business</strong> through the <strong>Choctaw Nation of Oklahoma</strong>. This recognition reflects our heritage, values, and commitment to excellence in serving our community.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="text-blue-600 font-bold text-lg mb-1">Certified</div>
                    <div className="text-sm text-gray-600">Minority-Owned</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="text-blue-600 font-bold text-lg mb-1">Heritage</div>
                    <div className="text-sm text-gray-600">Choctaw Nation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-8 md:px-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  <span className="font-semibold text-lg">
                    Supporting Diversity & Excellence in DFW
                  </span>
                </div>
                <div className="text-sm opacity-90 text-center md:text-right">
                  Certified through the Choctaw Nation of Oklahoma
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
