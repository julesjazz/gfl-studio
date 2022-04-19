import React from 'react';
import Icon from '../../components/emojiIcon';

export default {
  name: 'venue',
  title: 'Venue',
  type: 'document',
  icon: () => <Icon emoji="🏟" />,
  fields: [
    {
      name: 'title',
      title: 'Venue Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Venue Slug',
      type: 'slug',
      description: 'page slug for frontend routing',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'mapurl',
      title: 'Map URL',
      type: 'url',
      description: 'link to google maps or other map site',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'address1',
          title: 'Street Address',
          type: 'string',
        },
        {
          name: 'address2',
          title: 'Address Line 2',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
        },
        {
          name: 'zip',
          title: 'Zip',
          type: 'string',
        },
      ],
    },
    {
      name: 'notes',
      title: 'Venue Notes',
      type: 'text',
    },
  ],
};
