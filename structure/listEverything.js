import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Everything')
  .child(S.list().title('All Documents').items(S.documentTypeListItems()));
