Ext.define('MsTraining.store.ToDos',{
    extend: 'Ext.data.Store',
    alias: 'store.todos',
    model: 'MsTraining.model.ToDo',
    requires: ['MsTraining.model.ToDo'],
     proxy: {
            type: 'rest', // type of call
            url: 'https://jsonplaceholder.typicode.com/todos',
            reader: {
                type: 'json',
            }
        },
    autoLoad:true

})