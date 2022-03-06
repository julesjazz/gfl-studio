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
    prepare({title, nickname, pronouns, media}) {
      return {
        // title: nickname || title,
        // subtitle: `${pronouns || ''}`,
        title: title,
        media: media || <Icon emoji="🎭" />
      }
    }
  },
  groups: [
    {name:'details', title: 'Details', default: true },
    {name:'media', title: 'Media' },
    {name:'content', title: 'Content' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Company Name',
      type: 'string',
      group: 'details',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'details',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'imageAlt',
      type: 'string',
      group: 'media',
      title: 'Image Alt Text',
      description: 'Company Promo Image Description'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      group: 'media',
      description: 'Company Promo Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'social',
      type: 'array',
      title: 'Socials',
      group: 'details',
      description: 'Social media & Contact info',
      of: [
        {
          type: 'social'
        }
      ]
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      group: 'content',
      description: 'Content Summary',
    },
    {
      name: 'body',
      title: 'Body',
      group: 'content',
      type: 'pText'
    }
  ]
}
