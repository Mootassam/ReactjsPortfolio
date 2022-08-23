export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descrription',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'skills1',
      title: 'Skills1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'skills2',
      title: 'Skills2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'skills3',
      title: 'Skills3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
