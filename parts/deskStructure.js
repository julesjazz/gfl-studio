import S from '@sanity/desk-tool/structure-builder'


export default () =>
  S.list()
    .title('Base')
    .items(
      S.documentTypeListItems()
    )


/*
add to sanity.json parts:
{
  "name": "part:@sanity/desk-tool/structure",
  "path": ".parts/deskStructure.js"
}
*/