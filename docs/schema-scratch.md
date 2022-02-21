## sanity intra ref (private): 
https://github.com/sanity-io/intra-sanity-studio  



## ref array
```js
{
      name: 'articleTagArray',
      title: 'Tags',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type:'tag'}]
      }]
    },
```

## ref person schema
```js
import React from 'react'
import Icon from '../src/Icon'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: () => <Icon emoji="👤" />,
  preview: {
    select: {
      title: 'name',
      nickname: 'nickname',
      location: 'location',
      employments: 'employments',
      media: 'image'
    },
    prepare({title, nickname, media, location, employments}) {
      console.log(location, employments)
      const currentEmployment = typeof employments !== "undefined" ? employments[employments.length - 1]?.jobTitle : "No employment set"
      return {
        title: nickname || title,
        subtitle: `${currentEmployment}, ${location?.city || 'No city set'} (${location?.country || 'No country set'})`,
        media: media || <Icon emoji="👤" />
      }
    }
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'nickname',
      title: 'Nickname',
      type: 'string'
    },
    {
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string'
    },
    {
      name: 'sanityId',
      title: 'Sanity ID',
      type: 'string'
    },
    {
      name: 'github',
      title: 'GitHub Username',
      type: 'string'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'bio',
      type: 'array',
      title: 'Bio',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'contactDetails',
      type: 'contactDetails',
      title: 'Contact details'
    },
    {
      name: 'employments',
      type: 'array',
      title: 'Employments',
      of: [
        {
          type: 'employment'
        }
      ]
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'city',
          title: 'City',
          type: 'string'
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string'
        }
      ]
    },
    {
      name: 'access',
      type: 'access',
      title: 'Access',
      description: 'Just an overview of access to services. Not actually setting the access.'
    },
    {
      name: 'pets',
      type: 'array',
      title: 'Pets',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'pet'
            }
          ]
        }
      ]
    }
  ]
}
```