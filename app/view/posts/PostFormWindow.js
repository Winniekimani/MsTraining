Ext.define('MsTraining.view.posts.PostFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'postformwindow',
    controller: 'postformcontroller', // controller with save and cancel function
    title: "Add Post",
    height: 250,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
      items: [{
            xtype: 'form',
            reference: 'postform',
            itemId:'postform',
            jsonSubmit:true,
            bodyPadding: 10,
            modelValidation: true,
            items: [
                {
                    allowBlank: true,
                    readOnly:true,//cant be edited
                    xtype: 'textfield',
                    reference: 'postId',
                    fieldLabel: 'Post ID',
                    name: 'id',
                    emptyText: 'Post id'
                },
                {
                    allowBlank: false,
                    xtype: 'textfield',
                    fieldLabel: 'User ID',
                    name: 'userId',
                    emptyText: 'user id'
                },
                {
                    allowBlank: false,
                    xtype: 'textfield',
                    fieldLabel: 'Title',
                    name: 'title',
                    emptyText: 'title'
                },
                {
                    allowBlank: false,
                    xtype: 'textareafield',
                    fieldLabel: 'Body',
                    name: 'body',
                    emptyText: 'body'
                },
            ],

        }],
        buttons: [

            {
                text: 'Clear',
                handler: 'onClearClick'
            },
            {
                text: 'Save',
                handler: 'onSaveClick'
            },
            ]
})