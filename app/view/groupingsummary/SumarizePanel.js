Ext.define('MsTraining.view.groupingsummary.SummarizePanel',{
    extend:'Ext.panel.Panel',
    xtype:'summarizepanel',
    items: [{
        title: 'Employee Grouping',
        items: [
           {
                xtype:'employeegroupinggrid'
           }
        ]
    }, {
        title: 'Results Summary',
        items: [
            {
                xtype: 'resultgrid'
            }
        ]
    }]
})