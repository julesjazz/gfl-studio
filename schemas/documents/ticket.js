import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'ticket',
  title: 'Tickets',
  type: 'document',
  icon: () => <Icon emoji="🏷" />,
  fields: [
    {
      name: 'title',
      title: 'Title(temp)',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number'
    },
  ]
}