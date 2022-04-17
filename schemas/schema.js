import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
// Objects ------------------------------------------------------------------
import pText from './objects/pText'
import pTextLite from './objects/pTextLite'
import role from './objects/role'
// Documents ----------------------------------------------------------------
import article from './documents/article'
import category from './documents/category'
import company from './documents/company'
import member from './documents/member'
import performance from './documents/performance'
import ticket from './documents/ticket'
import show from './documents/show'
import tag from './documents/tag'
import venue from './documents/venue'

// Schema types ---------------------------------------------------------------
// Objects won't appear in structure
export const schemaObjs = [
  pText,
  pTextLite,
  role
]
export const schemaDocs = [
  company,
  member,
  article,
  venue,
  show,
  performance,
  ticket,
  tag,
  category,
]

// Create Schema ---------------------------------------------------------------
export default createSchema({
  name: 'default',
  types: schemaTypes.concat(schemaDocs, schemaObjs)
})
