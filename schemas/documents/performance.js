import React from 'react'
import Icon from '../../components/emojiIcon'


export default {
  name: 'performance',
  title: 'Performances',
  type: 'document',
  icon: () => <Icon emoji="🎩" />,
  fields: [
    {
      name: 'show',
      title: 'Show',
      type: 'reference',
      to: [{type: 'show'}]
    },
    {
      name: 'date',
      title: 'Performance Date',
      type: 'datetime'
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: [{type: 'venue'}]
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