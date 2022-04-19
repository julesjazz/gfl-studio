import React from 'react';
import Icon from '../../components/emojiIcon';

export default {
  name: 'role',
  title: 'Role',
  type: 'object',
  icon: () => <Icon emoji="⭐️" />,
  fields: [
    {
      name: 'roleName',
      title: 'Role Title',
      type: 'string',
    },
    {
      name: 'shows',
      title: 'Shows',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'show' }],
        },
      ],
    },
  ],
};
