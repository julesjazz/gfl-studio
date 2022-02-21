// full rich text "portable text"
// with images, 'H1' reserved for document title

export default {
  title: 'Portable Text Content',
  name: 'pText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      options: {
        spellCheck: true
      },
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'}, 
          {title: 'Emphasis', value: 'em'}],
        annotations:[
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [{title: 'URL', name: 'href', type: 'url',}]
          }
        ]
      }
    },
    /* adtnl types */
    {type: 'image', hotspot: true}
  ]
}