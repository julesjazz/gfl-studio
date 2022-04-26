import React from 'react';
import Icon from '../../components/emojiIcon';

export default {
  name: 'performance',
  title: 'Performance',
  type: 'document',
  icon: () => <Icon emoji="🎩" />,
  preview: {
    select: {
      title: 'title',
      showtitle: 'show.title',
      date: 'date',
      media: 'show.image',
      venue: 'venue.title',
    },
    prepare({ venue, showtitle, date, media }) {
      return {
        title: `${showtitle ? showtitle : 'Add a show'}`,
        subtitle: `${
          date ? date.slice(0, 10) + '@' + venue : 'Add a date + venue'
        }`,
        media: media || <Icon emoji="🎩" />,
      };
    },
  },
  fields: [
    {
      name: 'show',
      title: 'Show',
      description: 'Required: Assigned Show',
      type: 'reference',
      to: [{ type: 'show' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      description: 'Required: Performance Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: new Date(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'h:mm A',
      },
    },
    {
      name: 'venue',
      title: 'Venue',
      description: 'Required: Performance Venue',
      type: 'reference',
      to: [{ type: 'venue' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seats',
      title: 'Steats',
      type: 'number',
      description: 'Number of seats available',
    },
    {
      name: 'notes',
      title: 'Performance Notes',
      type: 'text',
      rows: 5,
      description: 'Optional notes about the performance',
    },
  ],
};
