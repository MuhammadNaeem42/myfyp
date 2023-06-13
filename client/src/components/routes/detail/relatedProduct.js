import React from 'react';
import { FrequentlyBoughtTogether, RelatedProducts } from '@algolia/recommend-react';
import recommend from '@algolia/recommend';

const recommendClient = recommend(
  'HSL9DXG942',
  'd352733a9ed989c6ade9b097b79a65c9'
);

const indexName = 'book-store-2';

function RelatedProduct({ id }) {
  // ...

  return (
    <div>
      <FrequentlyBoughtTogether
        recommendClient={recommendClient}
        indexName={indexName}
        objectIDs={[id]}
        itemComponent={({ item }) => {
          return (
            <pre>
              <code>{JSON.stringify(item)}</code>
            </pre>
          );
        }}
      />
      <RelatedProducts
        recommendClient={recommendClient}
        indexName={indexName}
        objectIDs={[id]}
        itemComponent={({ item }) => {
          return (
            <pre>
              <code>{JSON.stringify(item)}</code>
            </pre>
          );
        }}
      />
    </div>
  );
}

export default RelatedProduct;
