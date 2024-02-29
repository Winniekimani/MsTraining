Ext.define('MsTraining.store.Albums',{
    extend: 'Ext.data.Store',
    alias: 'store.albums',
    model: 'MsTraining.model.Album',
    requires: ['MsTraining.model.Album'],
     proxy: {
            type: 'rest', // type of call
            url: 'https://jsonplaceholder.typicode.com/albums',
            reader: {
                type: 'json',
            }
        },
    autoLoad:true

})