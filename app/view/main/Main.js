/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MsTraining.view.main.Main', {
     extend: 'Ext.container.Container',
    xtype: 'app-main',

   /* requires: [
       *//* 'Ext.plugin.Viewport',*//*
        'Ext.window.MessageBox',

        'MsTraining.view.main.MainController',
        'MsTraining.view.main.MainModel',
        *//*'MsTraining.view.main.List'*//*
    ],*/

    plugins: 'viewport',
    controller: 'main',
    viewModel: 'main',
     layout: {
            type: 'border'
        },
      items: [{
             xtype: 'mainmenu',
             bind: {
                 title: '{name}'
             },
             region: 'west',/*
             html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',*/
             width: 250,
             split: true,
            /* tbar: [{
                 text: 'Button',
                 handler: 'onLogout'
             }]*/
         },{
             region: 'center',
             xtype: 'mainpanel',
             /*items:[{
                 title: 'Tab 1',
                 html: '<h2>Content appropriate for the current navigation.</h2>'
             }]*/
         },
         {
          region: 'south',
          xtype: 'appfooter',
         } ,
               {
                  region: 'north',
                   xtype: 'appheader',
              }

         ]

});
