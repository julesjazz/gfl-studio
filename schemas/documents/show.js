import React from 'react';
import Icon from '../../components/emojiIcon';

export default {
  name: 'show',
  title: 'Show',
  type: 'document',
  icon: () => <Icon emoji="🎬" />,
  orderings: [
    {
      default: true,
      title: 'Premier Date',
      name: 'premierDate',
      by: [
        {field: 'premierDate', direction: 'desc'}
      ]
    },
    {
      title: 'Title',
      name: 'title',
      by: [
        {field: 'title', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      summary: 'subtitle',
      media: 'image',
      featured: 'featured',
      onsale: 'onsale',
    },
    // title: ,
    prepare({ title, featured, onsale, summary, media }) {
      return {
        title: `${featured ? '⭐️ ' + title : title}`,
        subtitle: `${onsale ? '💲 ' + summary : summary}`,
        media: media || <Icon emoji="🎬" />,
      };
    },
  },
  groups: [
    { name: 'details', title: 'Details' },
    { name: 'media', title: 'Media' },
    { name: 'info', title: 'Show Info' },
    { name: 'performances', title: 'Performances' },
  ],
  // FIELDS >>------------------------------------------------------>>
  fields: [
    {
      group: 'details',
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Featured show',
      initialValue: false,
    },
    {
      name: 'onsale',
      title: 'On Sale',
      type: 'boolean',
      description: 'Show is on sale',
      group: 'details',
      initialValue: false,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'details',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
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
        maxLength: 96,
      },
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
          to: [{ type: 'performance' }],
          initialValue: {
            show: {
              _type: 'reference',
            },
          },
        },
      ],
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
        hotspot: true,
      },
    },
    // show date - related to tickets sold
    {
      name: 'body',
      title: 'Body',
      type: 'pText',
      group: 'info',
    },
  ],
};
