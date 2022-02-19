import {DocumentsIcon} from '@sanity/icons'

export default {
  name: 'show',
  title: 'Shows',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText'
    }
  ]
}