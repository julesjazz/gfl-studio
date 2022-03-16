import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Base')
    .items(
      S.documentTypeListItems()
    )
    
/*
ref: https://www.sanity.io/docs/set-up-structure-builder-to-override-the-default-list-view

add to sanity.json parts:
{
  "name": "part:@sanity/desk-tool/structure",
  "path": ".parts/deskStructure.js"
}

*/