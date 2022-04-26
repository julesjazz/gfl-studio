import S from '@sanity/desk-tool/structure-builder';
import client from 'part:@sanity/base/client';
import logo from '../components/logo';


const sanityClient = client.withConfig({ apiVersion: '2022-04-10' });

const mainCompany = 'Grapefruit Lab'; // <-- enter main company title here
const companyQuery = sanityClient.fetch(
  `*[_type == "company" && title == "${mainCompany}"][0]._id`
);

export default S.listItem()
  .title('Company')
  .icon(logo)
  .child(() => {
    return companyQuery.then((res) => {
      return S.document().schemaType('company').documentId(res);
    });
  });
