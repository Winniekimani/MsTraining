Ext.define('MsTraining.store.Results', {
    extend: 'Ext.data.Store',
    model: 'MsTraining.model.Result',
    alias: 'store.results',
    groupField: 'subject',
    data: [{
        student: 'Student 1',
        subject: 'Math',
        mark: 84
    },{
        student: 'Student 1',
        subject: 'Science',
        mark: 72
    },{
        student: 'Student 2',
        subject: 'Math',
        mark: 96
    },{
        student: 'Student 2',
        subject: 'Science',
        mark: 68
    },
    {
        student: 'Student 3',
        subject: 'Science',
        mark: 80
    }]
});
