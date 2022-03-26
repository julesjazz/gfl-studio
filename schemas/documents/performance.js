import React from 'react'
import Icon from '../../components/emojiIcon'


export default {
  name: 'performance',
  title: 'Performances',
  type: 'document',
  icon: () => <Icon emoji="🎩" />,
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'show.image'
    },
    prepare({title, date, media}) {
      return {
        title: title,
        // subtitle: date.toISOString().slice(0,10), //  ${date.toLocaleTimeString("en-US")}
        media: media || <Icon emoji="🎩" />
      }
    }
  },
  fields: [
    {
      name: 'show',
      title: 'Show',
      type: 'reference',
      to: [{type: 'show'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Performance Date & Time',
      type: 'datetime',
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'h:mm A',
      }
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: [{type: 'venue'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'seats',
      title: 'Steats',
      description: 'Number of seats available',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'placeholder: to be auto populated [show,date,venue]',
      // TODO: slugify: show-date-venue
    },
    {
      name: 'notes',
      title: 'Performance Notes',
      type: 'text',
      description: "Notes on this date's performance"
    }
  ]
}