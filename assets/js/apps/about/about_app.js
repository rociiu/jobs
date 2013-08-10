JobsBoard.module('AboutApp',function(AboutApp,JobsBoard, Backbone,Marionette,$,_){
  AboutApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "about": "showAbout"
    }
  });

  var API = {
    showAbout: function() {
      AboutApp.Show.Controller.showAbout();
      JobsBoard.HeaderApp.List.Controller.setActiveHeader("about");
    }
  }

  JobsBoard.on("about:show", function(){
    JobsBoard.navigate("about");
    API.showAbout();
  });

  JobsBoard.addInitializer(function(){
    new AboutApp.Router({
      controller: API
    });
  });
})

