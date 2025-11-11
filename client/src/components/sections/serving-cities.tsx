import { Link } from "wouter";
import { TOP_CITIES_FOR_DISPLAY } from "@/lib/seo-constants";

export default function ServingCities() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-700 text-lg">
          <strong className="text-gray-900">Proudly serving:</strong>{" "}
          {TOP_CITIES_FOR_DISPLAY.map((city, index) => (
            <span key={city}>
              <Link 
                href={`/service-areas/${city.toLowerCase().replace(' ', '-')}-tx`} 
                className="text-blue-600 hover:text-blue-800 font-medium"
                data-testid={`link-city-${city.toLowerCase().replace(' ', '-')}`}
              >
                {city}
              </Link>
              {index < TOP_CITIES_FOR_DISPLAY.length - 1 && <span className="mx-2">·</span>}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
