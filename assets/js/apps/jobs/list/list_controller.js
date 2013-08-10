JobsBoard.module("JobsApp.List", function(List, JobsBarod, Backbone, Marionette, $, _) {
  List.Controller = {
    listJobs: function() {
      var fetchingJobs = JobsBoard.request("job:entities");
      $.when(fetchingJobs).done(function(jobs){
        var jobsListView = new List.Jobs({
          collection: jobs
        })
        JobsBoard.mainRegion.show(jobsListView);
      });
    },
    
    showJob: function() {
    }
  }
})

