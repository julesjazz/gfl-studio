import React from 'react';
import Icon from '../../components/emojiIcon';

export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  icon: () => <Icon emoji="🎭" />,
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title,
        media: media || <Icon emoji="🎭" />,
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Page URL (site.com/{slug})',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      description: 'Optional Custom Promo "imageAlt"',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Company Promo Image',
      options: {
        hotspot: true,
      },
    },
    { name: 'url', title: '🌐 URL', type: 'string' },
    { name: 'email', title: '＠ Email', type: 'string' },
    { name: 'phone', title: '📞 Phone', type: 'string' },
    { name: 'twitter', title: '🐦 Twitter', type: 'string' },
    { name: 'instagram', title: '🤳 Instagram', type: 'string' },
    { name: 'facebook', title: '👍 Facebook', type: 'string' },
    { name: 'other', title: '👤 Other', type: 'string' },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'Company Summary (SEO)',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'pText',
    },
  ],
};
