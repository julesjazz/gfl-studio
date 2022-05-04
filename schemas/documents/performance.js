import React from 'react'
import Icon from '../../components/emojiIcon'
import client from 'part:@sanity/base/client'

const sanityClient = client.withConfig({ apiVersion: '2022-04-10' })

// const titleSlug = async (input) => {
//   const query = `*[_type == 'performance' && _id == $id][0]{
//     date,
//     "show": show->.title,
//     "venue": venue->.title
//   }`
//   const params = { id: input}
//   const result = await sanityClient.fetch(query, params)
//   return `${result.date.slice(5, 10)} ${result.show.slice(0,9)} @ ${result.venue.slice(0,8)}`
// }

export default {
  name: 'performance',
  title: 'Performance',
  type: 'document',
  icon: () => <Icon emoji="🎩" />,
  preview: {
    select: {
      title: 'title',
      showtitle: 'show.title',
      date: 'date',
      media: 'show.image',
      venue: 'venue.title',
    },
    prepare({ venue, showtitle, date, media }) {
      return {
        title: `${showtitle ? showtitle : 'Add a show'}`,
        subtitle: `${
          date ? date.slice(0, 10) + '@' + venue : 'Add a date + venue'
        }`,
        media: media || <Icon emoji="🎩" />,
      }
    },
  },
  fields: [
    {
      // -------------------------------------------------- WORKING . . . //
      name: 'title',
      title: 'Title',
      type: 'slug',
      options: {
        source: '_id',
        slugify: async input => {
          const query = `*[_type == 'performance' && _id == $id][0]{
            date,
            "show": show->.title,
            "venue": venue->.title
          }`
          const params = { id: input}
          const result = await sanityClient.fetch(query, params)
          return `${result.date.slice(5, 10)} ${result.show.slice(0,9)} @ ${result.venue.slice(0,8)}`
        },
      },
    },
    {
      name: 'show',
      title: 'Show',
      description: 'Required: Assigned Show',
      type: 'reference',
      to: [{ type: 'show' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      description: 'Required: Performance Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: new Date(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'h:mm A',
      },
    },
    {
      name: 'venue',
      title: 'Venue',
      description: 'Required: Performance Venue',
      type: 'reference',
      to: [{ type: 'venue' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seats',
      title: 'Steats',
      type: 'number',
      description: 'Number of seats available',
    },
    {
      name: 'notes',
      title: 'Performance Notes',
      type: 'text',
      rows: 5,
      description: 'Optional notes about the performance',
    },
  ],
}

/* blorky
function titleSlugify(input) {
  const shortDate = input.date.slice(5,10)
  const query = `*[_id == $id]{
    "show": show->.title,
    "venue": venue->.title,
  }`
  const params = {id: input._id}
  const result = sanityClient.fetch(query, params)
  return () => {
    return console.log(result)
    // return `${shortDate} - ${result.show} at ${result.venue}`
  }
} 
...
{ 
      // -------------------------------------------------- WORKING . . . //
      name: 'title',
      title: 'Title',
      type: 'slug',
      options: {
        // source: (document, options) => {
        //   options = {document}
        //   const query = {
        //     'show': `*[_type == "show" && _id == $refS._ref].title`,
        //     'venue': `*[_type == "venue" && _id == $refV._ref].title`,
        //   };
        //   const params = { refS: document.show._ref, refV: document.venue._ref };
        //   const titles = sanityClient.fetch(query, params).then(data => {
        //     console.log("fetched", data);
        //     return data;
        //   });
        //   return titles;
        // },
        source: document => titleSlugify(document),
        slugify: input => input,
      }
    },

const titleQuery = async () => {
  const {document} = options
  const query = `{
    "showTitle": *[_type == "show" && _id == $s][0].title,
    "venueTitle": *[_type == "venue" && _id == $v]}[0].title,
  }`
  const params = {
    s: document.show._ref,
    v: document.venue._ref,
  };
  const { showTitle, venueTitle } = await sanityClient.fetch(query, params)
  const dateString = doc.date.toISOString().split('T')[0]
  return `${showTitle} at ${venueTitle} on ${dateString}`
}
const query = `{
  'show': *[_id == $doc._id]{"show": show->.title},
  'venue': *[_id == $doc._id]{"venue": venue->.title},
  }
}`
// --------------------//
source: doc => {
  const pdate = doc.date.split('T')[0]
  const {show, venue} = sanityClient.fetch(query, { doc })
  return `${show}`
},
source: async document => {
    const query = `{
      "st": *[_type == "show" && _id == $s][0].title,
      "vt": *[_type == "venue" && _id == $v]}[0].title,
    }`
    const params = {
      s: document.show._ref,
      v: document.venue._ref,
    };
    const { st, vt } = await sanityClient.fetch(query, params)
    return `${st}  at  ${vt}`
},
slugify: input => input
source: document => document.date,
  async () => {
    const { show, venue } = await sanityClient.fetch(query, params)
    const dateString = document.date.toISOString().split('T')[0]
    return (`${dateString} ${show}, ${venue}`)
  }
),
maxLength: 200, // will be ignored if slugify is set
slugify: input => input.toISOString().split('T')[0]
 */
