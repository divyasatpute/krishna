export default{
    name:'workExperience',
    title:'WorkExperience',
    type:'document',
    fields:[
        {
            name:'Role',
            title:'Name',
            type:'string'
        },
        {
            name:'orgname',
            title:'OrganizationName',
            type:'string'
        },
        {
            name:'descripition',
            title:'Descripition',
            type:'string'
        },
        {
            title: 'Duration',
            name: 'duration',
            type: 'datetime',
            options: {
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm',
            }
          }
    ]
}