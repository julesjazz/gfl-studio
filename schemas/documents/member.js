import React from 'react';
import Icon from '../../components/emojiIcon';

export default {
  name: 'member',
  title: 'Member',
  type: 'document',
  icon: () => <Icon emoji="👩‍🎤" />,
  preview: {
    select: {
      title: 'name',
      nickname: 'nickname',
      pronouns: 'pronouns',
      media: 'image',
    },
    prepare({ title, nickname, pronouns, media }) {
      return {
        title: nickname || title,
        subtitle: `${pronouns || ''}`,
        media: media || <Icon emoji="🧑‍🎤" />,
      };
    },
  },
  groups: [
    { name: 'details', title: 'Details' },
    { name: 'contact', title: 'Contact Info' },
    { name: 'media', title: 'Media' },
    { name: 'bio', title: 'Bio' },
    { name: 'roles', title: 'Roles' },
  ],
  fields: [
    {
      name: 'active',
      title: 'Active Member',
      type: 'boolean',
      description: 'Active member',
      group: 'details',
      initialValue: true,
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'details',
    },
    {
      name: 'nickname',
      title: 'Nickname',
      type: 'string',
      description: 'Used for member url slug',
      group: 'details',
    },
    {
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      group: 'details',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Page URL (site.com/{slug}), required',
      group: 'details',
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc) => (doc.nickname ? doc.nickname : doc.name),
        maxLength: 96,
      },
    },
    {
      name: 'url',
      title: '🌐 URL',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'email',
      title: '＠ Email',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'phone',
      title: '📞 Phone',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'twitter',
      title: '🐦 Twitter',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'instagram',
      title: '🤳 Instagram',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'facebook',
      title: '👍 Facebook',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'other',
      title: '👤 Other',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'roles',
      type: 'array',
      title: 'Roles',
      group: 'roles',
      description: 'Roles & Tiles',
      of: [
        {
          type: 'role',
        },
      ],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      group: 'bio',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'pTextLite',
      group: 'bio',
    },
  ],
};
