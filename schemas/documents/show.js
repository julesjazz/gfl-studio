import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'show',
  title: 'Shows',
  type: 'document',
  icon: () => <Icon emoji="🎬" />,
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
      type: 'pText'
    }
  ]
}