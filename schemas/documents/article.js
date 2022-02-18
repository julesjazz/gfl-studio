import {DocumentsIcon} from '@sanity/icons'

export default {
  name: 'article',
  title: 'Article',
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
      name: 'articleCategory',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'articleTagArray',
      title: 'Tags',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type:'tag'}]
      }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText'
    }
  ]
}