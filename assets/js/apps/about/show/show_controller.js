JobsBoard.module('AboutApp.Show',function(Show,JobsBoard, Backbone,Marionette,$,_){
  Show.Controller = {
    showAbout: function() {
      var view = new Show.Message();
      JobsBoard.mainRegion.show(view);
    }
  }
})

