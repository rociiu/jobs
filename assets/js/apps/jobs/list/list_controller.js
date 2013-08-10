JobsBoard.module("JobsApp.List", function(List, JobsBarod, Backbone, Marionette, $, _) {
  List.Controller = {
    listJobs: function() {
      var loadingView = new JobsBoard.Common.Views.Loading()
      JobsBoard.mainRegion.show(loadingView);
      
      var fetchingJobs = JobsBoard.request("job:entities");
      $.when(fetchingJobs).done(function(jobs){
        var jobsListView = new List.Jobs({
          collection: jobs
        })
        JobsBoard.mainRegion.show(jobsListView);
      });
    }
  }
})

