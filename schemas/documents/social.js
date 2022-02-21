import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'social',
  title: 'Socials',
  type: 'document',
  icon: () => <Icon emoji="🐤" />,
  fields: [
    // TODO: add validations where necessary
    {
      name: 'social_email',
      title: 'EMail',
      type: 'string',
    },
    {
      name: 'social_twitter',
      title: 'Twitter',
      type: 'string',
    },
    {
      name: 'social_instagram',
      title: 'Instagram',
      type: 'string',
    },
    {
      name: 'social_facebook',
      title: 'Facebook',
      type: 'string',
    },
    {
      name: 'social_linkedin',
      title: 'Linkedin',
      type: 'string',
    },
    {
      name: 'social_github',
      title: 'GitHub',
      type: 'string',
    },
    {
      name: 'social_other',
      title: 'Other',
      type: 'string',
    }
  ]
}