

export default {
  name: 'role',
  title: 'Role',
  type: 'object',
  fields: [
    {
      name: 'roleName',
      type: 'string',
      title: 'Role Name'
    },
    {
      name: 'shows',
      type: 'array',
      title: 'Shows',
      of: [
        {
          type: 'reference',
          to: [{type: 'show'}]
        }
      ]
    },
  ]
}