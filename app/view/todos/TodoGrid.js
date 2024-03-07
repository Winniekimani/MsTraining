Ext.define('MsTraining.view.todos.TodoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',
    reference:'todogrid',
    controller: 'todogridcontroller',
    store: {
        type: 'todos'
    },
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'completed', text: 'Completed'},
       /* { dataIndex: 'userId', text: 'User ID' }*/
    ],
       selModel: {
            selType: 'checkboxmodel',
            mode: 'MULTI'
        },
        tbar:[
            {
                text:'Add Todo',
                handler:'onAddTodo'
            },
            {
                text: 'View Todo',
                handler: 'onViewTodo',
                bind:{
                    disabled: '{!todogrid.selection}'
                }
            }
        ]
//    selModel: {
//        selType: 'checkboxmodel',
//        mode: 'SINGLE'
//    },
//    bbar: {
//        xtype: 'pagingtoolbar',
//        displayInfo: true
//    },
//    scrollable:true,
//    height: 800

})