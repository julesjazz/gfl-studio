import React from 'react';
import Icon from '../../components/emojiIcon';

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: () => <Icon emoji="📝" />,
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category.title',
    },
    prepare({ title, category, media }) {
      return {
        title: title,
        subtitle: category,
        media: media || <Icon emoji="🎭" />,
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Document title, primary header',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
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
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Content Summary',
      rows: 3,
      options: {
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'pText',
    },
  ],
};
