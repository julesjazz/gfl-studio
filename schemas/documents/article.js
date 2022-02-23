import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'article',
  title: 'Articles',
  type: 'document',
  icon: () => <Icon emoji="📝" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Document title, primary header'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Page URL (site.com/{slug})',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Content Summary',
      options: {
        maxLength: 96
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}]
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'pText'
    }
  ]
}