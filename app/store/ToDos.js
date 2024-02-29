Ext.define('MsTraining.store.ToDos',{
    extend: 'Ext.data.Store',
    alias: 'store.todos',
    model: 'MsTraining.model.ToDo',
    requires: ['MsTraining.model.ToDo'],
    autoLoad:true

})