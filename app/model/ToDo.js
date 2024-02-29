Ext.define('MsTraining.model.ToDo',{
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields:[
        'id','userId','title','completed'
    ],
    proxy: {
        type: 'rest', // type of call
        url: 'https://jsonplaceholder.typicode.com/todos',
        reader: {
            type: 'json',
        }
    }

})