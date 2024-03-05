Ext.define('MsTraining.store.ToDos',{
    extend: 'Ext.data.Store',
    alias: 'store.todos',
    model: 'MsTraining.model.ToDo',
    requires: ['MsTraining.model.ToDo'],
     proxy: {
            type: 'rest', // type of call
            url: 'http://localhost:3000/todos',
            reader: {
                type: 'json',
                rootProperty:'rows',
                totalProperty:'totalCount'
            }
        },
    autoLoad:true

})