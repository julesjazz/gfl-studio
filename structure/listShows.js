import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Shows')
  .child(
    S.documentTypeList('show').defaultOrdering([
      { field: 'premierDate', direction: 'desc' },
    ])
  );
