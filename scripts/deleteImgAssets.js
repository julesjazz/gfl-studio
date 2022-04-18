import client from 'part:@sanity/base/client';
const sanityClient = client.withConfig({ 
  apiVersion: '2022-04-10',
  dataset: 'development'
});

sanityClient
  .delete({
    query: '*[_type == "sanity.imageAsset"][0...999]',
  })
  .then(console.log)
  .catch(console.error);

// sanity exec scripts/deleteImgAssets.js --with-user-token
