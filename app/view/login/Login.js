Ext.define('MsTraining.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
        'MsTraining.view.login.LoginController',
        'Ext.form.Panel',
          'MsTraining.util.Util'
    ],
    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,
    draggable: false,
     resizable: false,
     layout: 'fit',
    items: {
            xtype: 'form',
            reference: 'form',
            defaults: {
                        afterLabelTextTpl: MsTraining.util.Util.required,
                    },

            items: [{
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false
            },
           /* {
                xtype: 'displayfield',
                hideEmptyLabel: false,
                value: 'Enter any non-blank password'
            }*/
            ],
            buttons: [{
                text: 'Login',
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                }
            }]
        }


    })