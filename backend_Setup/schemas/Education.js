export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'imageurl',
      title: 'ImgUrl',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'CollegeName',
      type: 'string',
    },
    {
      name: 'cousrenameduration',
      title: 'cousrenameDuration',
      type: 'string',
    },
    {
      name: 'universityname',
      title: 'universityname',
      type: 'string',
    },
    {
      name:'Grade',
      title:'GradeOrAttending',
      type:'string'
    }
  ],
}
