
Ext.define('MsTraining.view.posts.PostFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postformcontroller',
    init: function () {

    },
    onClearClick: function (btn, e, eOpts) {
        // get form
        // reset
    },
    onSaveClick: function (btn, e, eOpts) {
        let window = this.getView();
        console.log(window);
        let references = window.getReferences();

        let form = references['postform'].getForm();

        if(form.isValid()){
            //send ajax request to submit
            form.submit({
                method:'POST',
                url:'https://jsonplaceholder.typicode.com/posts',
                success:function(form,action){
                    Ext.Msg.alert('Success', action.result.msg);
                    // add the record tpo the post store -> post grid
                },
                failure:function(form,action){
                    // handle failures
                    Ext.Msg.alert('Failed', action.result.msg);
                }

            });
        }else{
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
        }


        //get all values
        // submit to json place holder => backend
        // add the items to the grid
    },


    /*onCancelClick: function () {
        var view = this.getView();
        view.close();
    },

    onSaveClick: function () {
        var view = this.getView(),
            form = view.down('form'),
            values = form.getValues(),
            postGrid = Ext.ComponentQuery.query('postgrid')[0], // Assuming there's only one postgrid
            store = postGrid.getStore();

        // Add the form values to the store
        store.add(values);

        // Close the window
        view.close();
    }*/
});
