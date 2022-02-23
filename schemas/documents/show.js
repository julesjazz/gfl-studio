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
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'premierDate',
      title: 'Premier',
      type: 'date'
    },
    {
      name: 'showDate',
      title: 'Show Dates',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'showDate'}],
          initialValue: {
            show: {
              _type: 'reference',
              // _ref: ''
            }
          }
        }
      ]
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    // show date - related to tickets sold
    {
      name: 'body',
      title: 'Body',
      type: 'pText'
    }
  ]
}