import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'show',
  title: 'Shows',
  type: 'document',
  icon: () => <Icon emoji="🎬" />,
  preview: {
    select: {
      title: 'title',
      summary: 'summary',
      media: 'image'
    },
    prepare({title, summary, media}) {
      return {
        title: title,
        subtitle: `${summary || ''}`,
        media: media || <Icon emoji="🎬" />
      }
    }
  },
  groups: [
    {name:'details', title: 'Details', default: true },
    {name:'media', title: 'Media' },
    {name:'info', title: 'Show Info' },
    {name:'performances', title: 'Performances' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'details',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'details',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'premierDate',
      title: 'Premier',
      type: 'date',
      group: 'details',
    },
    {
      name: 'performance',
      title: 'Performances',
      type: 'array',
      group: 'performances',
      of: [
        {
          type: 'reference',
          to: [{type: 'performance'}],
          initialValue: {
            show: {
              _type: 'reference',
            }
          }
        }
      ]
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      group: 'info',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      group: 'media',
      options: {
        hotspot: true
      }
    },
    // show date - related to tickets sold
    {
      name: 'body',
      title: 'Body',
      group: 'info',
      type: 'pText'
    }
  ]
}