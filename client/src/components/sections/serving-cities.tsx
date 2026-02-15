import { Link } from "wouter";

const linkedCities = [
  { name: "Arlington", slug: "arlington-tx" },
  { name: "Mansfield", slug: "mansfield-tx" },
  { name: "Southlake", slug: "southlake-tx" },
  { name: "Grapevine", slug: "grapevine-tx" },
  { name: "Dallas", slug: "dallas-tx" },
  { name: "Fort Worth", slug: "fort-worth-tx" },
  { name: "Euless", slug: "euless-tx" },
  { name: "Bedford", slug: "bedford-tx" },
  { name: "Plano", slug: "plano-tx" },
  { name: "Carrollton", slug: "carrollton-tx" },
  { name: "Addison", slug: "addison-tx" },
  { name: "Farmers Branch", slug: "farmers-branch-tx" },
];

export default function ServingCities() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-700 text-lg">
          <strong className="text-gray-900">Proudly serving homeowners in:</strong>{" "}
          {linkedCities.map((city, index) => (
            <span key={city.slug}>
              <Link
                href={`/service-areas/${city.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
                data-testid={`link-city-${city.slug}`}
              >
                {city.name}
              </Link>
              {index < linkedCities.length - 1 && <span className="mx-2">|</span>}
            </span>
          ))}
          <span className="ml-2 text-gray-600">plus Colleyville and Coppell.</span>
        </p>
      </div>
    </section>
  );
}
