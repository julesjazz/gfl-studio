import S from '@sanity/desk-tool/structure-builder'
import { schemaDocs } from '../schemas/schema'


export default () =>
S.list()
  .title('GRAPEFRUIT LAB')
  .items([
    ...S.documentTypeListItems(),
    S.divider(),
  ])

// INITIAL:
// export default () =>
// S.list()
//   .title('GRAPEFRUIT LAB')
//   .items(
//     S.documentTypeListItems()
//   )

// ... = spread syntax