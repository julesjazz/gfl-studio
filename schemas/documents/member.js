import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'member',
  title: 'Members',
  type: 'document',
  icon: () => <Icon emoji="👩‍🎤" />,
  preview: {
    select: {
      title: 'name',
      nickname: 'nickname',
      pronouns: 'pronouns',
      media: 'image'
    },
    prepare({title, nickname, pronouns, media}) {
      return {
        title: nickname || title,
        subtitle: `${pronouns || ''}`,
        media: media || <Icon emoji="🧑‍🎤" />
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
      name: 'hometown',
      title: 'Home Town',
      type: 'object',
      description: 'Where are you from?',
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
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'social',
      type: 'array',
      title: 'Socials',
      description: 'Social media & Contact info',
      of: [
        {
          type: 'social'
        }
      ]
    },
    {
      name: 'roles',
      type: 'array',
      title: 'Roles',
      description: 'Roles & Tiles',
      of: [
        {
          type: 'role'
        }
      ]
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'pTextLite'
    }
  ]
}