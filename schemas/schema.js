import createSchema from 'part:@sanity/base/schema-creator'

// Base Schema Type
import schemaTypes from 'all:part:@sanity/base/schema-type'
// - import schema objects
// (objects are functional and reference datasets, not for editing directly)
import pText from './objects/pText'
import pTextLite from './objects/pTextLite'
import role from './objects/role'
import social from './objects/social'


// - import schema documents
// (documents are anything you may want to edit and sort on its own)
import article from './documents/article'
import category from './documents/category'
import company from './documents/company'
import member from './documents/member'
import show from './documents/show'
import tag from './documents/tag'
import venue from './documents/venue'
import sales from './documents/sales'
import showDate from './documents/showDate'

// export schema configurations into the studio...
export default createSchema({
  // schema name
  name: 'default',
  types: schemaTypes.concat([

    // documents exports
    company,
    member,
    article,
    venue,
    show,
    showDate,
    sales,
    tag,
    category,

    // objects export
    pText,
    pTextLite,
    role,
    social

  ]),
})
