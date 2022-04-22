```json
// # Show
// https://7jk93b9e.api.sanity.io/v2021-10-21/data/query/production?query=*[_type%20%3D%3D%20%22show%22][0]
{
  "ms": 19,
  "query": "*[_type == \"show\"][0]",
  "result": {
    "_createdAt": "2022-03-27T05:47:34Z",
    "_id": "05a8f3da-24a8-4f91-b2dc-442b3ebc8167",
    "_rev": "i4tlC7j5gfT32K0OfSMkzB",
    "_type": "show",
    "_updatedAt": "2022-03-27T05:52:38Z",
    "body": [{
      /* Body stuff... */ }],
    "featured": false,
    "image": {
      /* Image stuff... */ },
    "premierDate": "2020-07-16",
    "slug": {
      "_type": "slug",
      "current": "memento-mori"
    },
    "subtitle": "July 2020 @ Savoy Denver",
    "summary": "some text.",
    "title": "Memento Mori"
  }
}

// # Performance
// https://7jk93b9e.api.sanity.io/v2021-10-21/data/query/production?query=*[_type%20%3D%3D%20%22performance%22][0]
{
  "_createdAt": "2022-03-15T22:22:24Z",
  "_id": "60f70436-d5de-4708-81da-dd9a35754f1e",
  "_rev": "i4tlC7j5gfT32K0OfSKJNf",
  "_type": "performance",
  "_updatedAt": "2022-03-27T04:57:50Z",
  "date": "2022-05-22T01:30:00.000Z",
  "seats": 40,
  "show": {
    "_ref": "ac89d1bc-335c-447b-be49-82fb373f4e80",
    "_type": "reference"
  },
  "title": "pf 5/21 - sat",
  "venue": {
    "_ref": "1b22ce1a-fda3-4876-9ac8-834effe7e6a1",
    "_type": "reference"
  }
}

// # Ticket
// https://7jk93b9e.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22ticket%22%5D%5B0%5D
{
  "_createdAt": "2022-04-18T03:43:33Z",
  "_id": "d31360c9-3405-4519-903a-7f44b67f59e2",
  "_rev": "8B190KCp9kAWhVBkqNYpys",
  "_type": "ticket",
  "_updatedAt": "2022-04-18T03:43:54Z",
  "checkedIn": false,
  "name": "Kat Meyer Reed",
  "numberOfTickets": 1,
  "performance": {
    "_ref": "fbbc8309-cbc0-4dcd-a70b-640e2b3aeb4a",
    "_type": "reference"
  },
  "price": 0
}
```
