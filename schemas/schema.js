import createSchema from 'part:@sanity/base/schema-creator'

// Base Schema Type
import schemaTypes from 'all:part:@sanity/base/schema-type'
// - import schema objects
import portableText from './objects/portableText'

// - import schema documents
import article from './documents/article'
import category from './documents/category'
import company from './documents/company'
import member from './documents/member'
import show from './documents/show'
import social from './documents/social'
// import tag from './documents/tag'
import venue from './documents/venue'

// export schema configurations into the studio...
export default createSchema({
  // schema name
  name: 'default',
  types: schemaTypes.concat([
    // documents exports
    article,
    category,
    company,
    member,
    show,
    social,
    // tag,
    venue,

    // objects export
    portableText,
  ]),
})
