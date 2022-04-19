import React from 'react';
import Icon from '../../components/emojiIcon';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: () => <Icon emoji="⚙️" />,
  preview: {
    select: {
      title: 'title',
      media: 'icon',
      description: 'description',
    },
    prepare({ title, media, description }) {
      return {
        title: title,
        subtitle: description,
        media: <Icon emoji={media} />,
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Optional emoji or character',
      valdiation: (Rule) =>
        Rule.min(1).max(3).warning('Single character or emoji as an icon.'),
      initialValue: '⚙️',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
};
