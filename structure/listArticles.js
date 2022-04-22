import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Articles')
  .child(S.documentTypeList('article'));
