import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'social',
  title: 'Socials',
  type: 'object',
  // icon: () => <Icon emoji="🐤" />,
  fields: [
    {
      name: 'socialInfo',
      title: 'Social Details',
      type: 'array',
      
      of: [
        {
          name: 'email',
          title: 'Email',
          type: 'text',
          icon: () => <Icon emoji="＠" />,
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'text',
          icon: () => <Icon emoji="📞" />,
          /*
          validator: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
          alt: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
          */
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'text',
          icon: () => <Icon emoji="🐤" />,
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'text',
          icon: () => <Icon emoji="🤳" />,
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'text',
          icon: () => <Icon emoji="👍" />,
        },
        {
          name: 'github',
          title: 'Github',
          type: 'text',
          icon: () => <Icon emoji="🧑🏻‍💻" />,
        },
        {
          name: 'other',
          title: 'Other',
          type: 'text',
          icon: () => <Icon emoji="👤" />,
        },
      ]
    }
  ]
}