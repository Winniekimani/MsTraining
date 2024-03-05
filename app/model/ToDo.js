Ext.define('MsTraining.model.ToDo',{
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields:[
        '_id','userId','title','completed'
    ],

proxy: {
        type: 'rest', // type of call
        url: 'http://localhost:3000/todos',
        reader: {
            type: 'json',
             rootProperty:'rows',
             totalProperty:'totalCount'
        }
    }


})