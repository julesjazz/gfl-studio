import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('GRAPEFRUIT LAB')
    .items([
      S.listItem()
        .title('GFL Company')
        .child(
          S.document()
            .schemaType('company')
            .documentId("6fef8485-e04a-4fb3-b485-55c9f86dc905")
        ),
      ...S.documentTypeListItems(),
      S.divider(),
    ]);


/*
TODO: get the company ID nicely
import client from 'part:@sanity/base/client';
const sanityClient = client.withConfig({apiVersion: '2022-04-10'});
// query string return no worky
const GFL = sanityClient.fetch({query: '*[_type == "company" && title == "Grapefruit Lab"][0]{_id}'})
// -or- ...
const GFL = sanityClient.fetch(
  JSON.stringify({ query:
    `*[_type == "company" && title == "Grapefruit Lab"][0]._id`
  })
)
*/