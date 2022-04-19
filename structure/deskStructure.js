import S from '@sanity/desk-tool/structure-builder';
import client from 'part:@sanity/base/client';
const sanityClient = client.withConfig({apiVersion: '2022-04-10'});
const mainCompany = 'Grapefruit LAB'
const companyQuery = sanityClient.fetch(
    `*[_type == "company" && title == "Grapefruit Lab"][0]._id` //, {params: {title: mainCompany}}
)


export default () =>
  S.list()
    .title('GRAPEFRUIT LAB')
    .items([
      // Company
      S.listItem()
        .title('Grapefruit Lab')
        .child(
          () => {return companyQuery.then(
            (res) => {
             return S.document()
              .schemaType('company')
              .documentId(res)
            }
          )}
        ),
      // articles
      S.listItem()
        .title('Articles')
        .child(
          S.documentTypeList('article')
        ),
      // shows
      S.listItem()
        .title('Shows')
        .child(
          S.documentTypeList('show').defaultOrdering([{field: 'premier', direction: 'asc'}])
        ),
      // tickets
      S.listItem()
        .title('Tickets')
        .child(
          S.documentTypeList('ticket')
        ),
      S.divider(),
      S.listItem()
        .title('Everything')
        .child(
          S.list().title('All Documents').items(S.documentTypeListItems())
        )
    ]);



/*
TODO: get the company ID nicely
import client from 'part:@sanity/base/client';
const sanityClient = client.withConfig({apiVersion: '2022-04-10'});
// query string return no worky
const GFL = sanityClient.fetch({query: '*[_type == "company" && title == "Grapefruit Lab"][0]{_id}'})
// -or- ...
const companyQuery = sanityClient.fetch(
  JSON.stringify({ query:
    `*[_type == "company" && title == "Grapefruit Lab"][0]._id`
  })
)

S.list()
  .id('everything')
  .title('EVERYTHING')
  .items(S.documentTypeListItems())

S.listItem()
  .title('EVERYTHING')
  .items(
    S.documentTypeListItems().filter(
      item => item.getId() !== 'siteSettings'
    ) 
  )
*/