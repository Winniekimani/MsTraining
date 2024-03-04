Ext.define('MsTraining.view.layouts.Table',{
   extend: "Ext.panel.Panel",
    xtype:'table',
    layout : {
          type :'table',
          columns : 3,
          padding: 10, // Adding padding around the table layout
          tdAttrs: {
                      style: 'padding: 10px;' // Adding padding to each table cell
                  }
       },
    style: {
            border: '1px solid #ccc', // Adding border to the table layout
            borderRadius: '5px', // Adding rounded corners to the border
            padding: '10px' ,// Adding padding inside the border
            backgroundColor: '#f9f9f9'
        },
       items : [{
          html : 'winnie',
          height : 50,
          colspan :2,
           style: {
                      border: '1px solid #ccc', // Adding border to the panel
                      padding: '10px',// Adding padding inside the border
                       backgroundColor: '#e6f7ff',
                       color: '#333' // Changing the text color to dark gray
                  }
       },{
          html : '<span style="color: pink;">emma</span>',
          height : 50,
          style: {
                      border: '1px solid #ccc', // Adding border to the panel
                      padding: '10px', // Adding padding inside the border
                      color: 'pink'//this not working
                  }
       },{
          html : 'isabel',
          height : 50,
          style: {
                      border: '1px solid #ccc', // Adding border to the panel
                      padding: '10px' // Adding padding inside the border
                  }
       },{
          html : 'mackrine',
          height : 50,
          style: {
                      border: '1px solid #ccc', // Adding border to the panel
                      padding: '10px' ,// Adding padding inside the border
                       backgroundColor: '#fff2e6'
                  }
       },{
          html : 'lenna',
          height : 50,
          style: {
                      border: '1px solid #ccc', // Adding border to the panel
                      padding: '10px' // Adding padding inside the border
                  }
       }]
})