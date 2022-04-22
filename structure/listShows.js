import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Shows')
  .child(
    S.documentTypeList('show').defaultOrdering([
      { default: true, field: 'premierDate', direction: 'desc' },
    ])
  );
