import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'role',
  title: 'Role',
  type: 'object',
  icon: () => <Icon emoji="⭐️" />,
  fields: [
    {
      name: 'roleName',
      type: 'string',
      title: 'Role Title',
    },
    {
      name: 'shows',
      type: 'array',
      title: 'Shows',
      of: [
        {
          type: 'reference',
          to: [{type: 'show'}]
        }
      ]
    },
  ]
}