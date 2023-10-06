export default {
    name:'Certificate',
    title: 'certificate',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'imageurl',
            title:'ImgUrl',
            type:'image'
        },
        {
            title: 'Performance Evaluation Date',
            name: 'PerformanceEvaluationDate',
            type: 'date'
          }
    ]
}