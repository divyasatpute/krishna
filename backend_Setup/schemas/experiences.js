export default{
    name:'experience',
    title:'Experience',
    type:'document',
    fields:[
        {
            name:'years',
            title:'Year',
            type:'string'
        },
        {
            name:'works',
            title:'works',
            type:'array',
            of:[{type:'workExperience'}]
        }
    ]
}