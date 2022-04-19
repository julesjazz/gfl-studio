import S from '@sanity/desk-tool/structure-builder';

export default CompanyStructure = () =>
  S.listItem()
  .title('Grapefruit Lab')
  .child(
    S.document().schemaType('company')
      .documentId("6fef8485-e04a-4fb3-b485-55c9f86dc905")
  )