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
  fields: [
    {
      name: 'title',
      title: 'Company Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Company Promo Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'social',
      type: 'array',
      title: 'Socials',
      description: 'Social media & Contact info',
      of: [
        {
          type: 'social'
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'pText'
    }
  ]
}