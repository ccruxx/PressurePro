import { Helmet } from "react-helmet-async";

interface SchemaOrgProps {
  schema: object | object[];
}

export default function SchemaOrg({ schema }: SchemaOrgProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];
  
  return (
    <Helmet>
      {schemaArray.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
}
