import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('GRAPEFRUIT LAB')
    .items([...S.documentTypeListItems(), S.divider()]);
