import S from '@sanity/desk-tool/structure-builder';
import client from 'part:@sanity/base/client';

const sanityClient = client.withConfig({ apiVersion: '2022-04-10' });

// const showPerfQuery = (id) => {
//   return sanityClient.fetch(
//     `*[_type == "show" && _id == "${id}].id`
//   );
// };

export default S.listItem().title('Tickets');

// // ------>
// .title('Show-Perf-Tkt')
// .child(
//   S.documentTypeList('show')
//     .title('Show List')
//     .child(showId =>
//       S.documentList()
//         .title('Show Details')
//         .filter('_type == "show" && $showId in show[]._ref')
//         .params({ showId })
//         .child(
//           () => { return showPerfQuery(showId).then((res) => {
//             return S.document().schemaType('show').documentId(res)
//           })}
//         )
//     )
// )
