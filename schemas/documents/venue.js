import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'venue',
  title: 'Venues',
  type: 'document',
  icon: () => <Icon emoji="🏟" />,
  fields: [
    {
      name: 'title',
      title: 'Venue Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Venue Slug',
      description: 'page slug for frontend routing',
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
      options: {
        hotspot: true
      }
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'mapurl',
      title: 'Map URL',
      description: 'link to google maps or other map site',
      type: 'url'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'address1',
          title: 'Street Address',
          type: 'string'
        },
        {
          name: 'address2',
          title: 'Address Line 2',
          type: 'string'
        },
        {
          name: 'city',
          title: 'City',
          type: 'string'
        },
        {
          name: 'state',
          title: 'State',
          type: 'string'
        },
        {
          name: 'zip',
          title: 'Zip',
          type: 'string'
        },
      ]
    }
  ]
}