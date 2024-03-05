Ext.define('MsTraining.view.fmviews.ParentPanel',{
    extend:'Ext.panel.Panel',
    xtype:'parentpanel',
    items:[
        {
            xtype:'usergrid',
            /*layout:'fit',*/

        },
        {
            xtype:'staticdatamanagementtabpanel',
         /*   height:'300',*/

        }
    ]
})