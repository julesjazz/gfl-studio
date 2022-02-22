// ticket and other sales, generic
// setting as a document for now
// - as the intent is to use this for reference of tickets sold
// ticket sales to be sorted by sell date in structure builder

import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'sales',
  title: 'Ticket Sales',
  type: 'document',
  icon: () => <Icon emoji="🎟" />,
  preview: {
    select: {
      title: 'name',
      checkedIn: 'checkedIn',
      numberOfTickets: 'numberOfTickets'
    },
    prepare({title, checkedIn, numberOfTickets}) {
      return {
        title: title,
        subtitle: `#tickets: ${numberOfTickets}`,
        media: () => {
          if (checkedIn === true) return <Icon emoji="✅"/>
          else return <Icon emoji="🎟"/>
        }
      }
    }
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'checkedIn',
      title: 'Checked In ✅',
      type: 'boolean'
    },
    {
      name: 'numberOfTickets',
      title: 'Number of Tickets',
      type: 'number'
    }
  ]
}