import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  icon: () => <Icon emoji="🎭" />,
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare({title, media}) {
      return {
        title: title,
        media: media || <Icon emoji="🎭" />
      }
    }
  },
  groups: [
    {name:'details', title: 'Details', default: true },
    {name:'contact', title: 'Contact Info' },
    {name:'media', title: 'Media' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Company Name',
      type: 'string',
      group: 'details',
    },
    {
      name: 'imageAlt',
      type: 'string',
      group: 'media',
      title: 'Image Alt Text',
      description: 'Optional Custom Promo "imageAlt"'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      group: 'media',
      description: 'Company Promo Image',
      // TODO: add image ref to  description
      options: {
        hotspot: true
      }
    },
    {name: 'url', title: '🌐 URL', type: 'string', group: 'contact'},
    {name: 'email', title: '＠ Email', type: 'string', group: 'contact'},
    {name: 'phone', title: '📞 Phone', type: 'string', group: 'contact'},
    {name: 'twitter', title: '🐦 Twitter', type: 'string', group: 'contact'},
    {name: 'instagram', title: '🤳 Instagram', type: 'string', group: 'contact'},
    {name: 'facebook', title: '👍 Facebook', type: 'string', group: 'contact'},
    {name: 'other', title: '👤 Other', type: 'string', group: 'contact'},
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      group: 'details',
      description: 'Company Summary (SEO)',
    },
    {
      name: 'body',
      title: 'Body',
      group: 'details',
      type: 'pText'
    }
  ]
}
