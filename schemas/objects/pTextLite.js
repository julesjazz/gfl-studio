// limited rich text "portable text"
// NO images, 'H1' reserved for document title

export default {
  title: 'Rich Text, Limited Options',
  name: 'pTextLite',
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
    // {type: 'image', hotspot: true} // images excluded
  ]
}