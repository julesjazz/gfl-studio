import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'showDate',
  title: 'Show Dates',
  type: 'document',
  icon: () => <Icon emoji="🎩" />,
  fields: [
    {
      name: 'date',
      title: 'Show Date & Time',
      type: 'datetime'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'show',
      title: 'Show',
      type: 'reference',
      to: [{type: 'show'}]
    },
  ]
}