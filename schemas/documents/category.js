import {FilterIcon} from '@sanity/icons'

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: FilterIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    }
  ]
}