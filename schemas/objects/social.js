import React from 'react'
import Icon from '../../components/emojiIcon'
import socialsInput from '../inputs/socialsInput'

export default {
  name: 'social',
  title: 'Socials',
  type: 'object',
  // icon: () => <Icon emoji="＠" />,
  fields: [
    {
      name: 'socialItem',
      title: 'Contact Method',
      type: 'array',
      of: [
        {
          name: 'socialType',
          title: 'Concact Type',
          type: 'string',
          options: {
            list: socialsInput
          }
        },
        {
          name: 'socialDetail',
          title: '',
          type: 'string'
        }
      ]
    }
  ]
}