import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: () => <Icon emoji="⚙️" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    }
  ],
}