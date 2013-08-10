JobsBoard.module('JobsApp', function(JobsApp, JobsBoard, Backbone, Marionette, $, _){
  JobsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "jobs": "listJobs",
      "jobs/:id": "showJob",
    }
  });
  
  var API = {
    listJobs: function() {
      JobsApp.List.Controller.listJobs();
    },
    showJob: function(id) {
      console.log("should list job: " + id)
    }
  };

  JobsBoard.addInitializer(function() {
    new JobsApp.Router({
      controller: API
    })
  });

})

