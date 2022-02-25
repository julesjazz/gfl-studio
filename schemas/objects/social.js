import React from 'react'
import Icon from '../../components/emojiIcon'
import socialTypes from '../inputs/socialTypes'

export default {
  name: 'social',
  title: 'Socials',
  type: 'object',
  // icon: () => <Icon emoji="＠" />,
  fields: [
    {
      name: 'socialType',
      title: 'Concact Type',
      type: 'string',
      options: {
        list: socialTypes
      }
    },
    {
      name: 'socialDetail',
      title: 'detail',
      type: 'string'
    }
  ]
}