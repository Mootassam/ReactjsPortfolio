export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'jobtitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
