Ext.define('MsTraining.view.employees.EmployeeGroupingGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'employeegroupinggrid',
    store: {
        type: 'employees'
    },
    title: 'Employees',
    columns: [
            { text: 'Name', dataIndex: 'name', flex: 1 },
            { text: 'Seniority', dataIndex: 'seniority', flex: 1 }
        ],
    features: [
    {
    ftype: 'grouping'
    }],
    //renderTo: Ext.getBody()
})