JobsBoard.module("JobsApp.Show", function(Show, JobsBarod, Backbone, Marionette, $, _) {
  Show.Controller = {
    showJob: function(id) {
      var loadingView = new JobsBoard.Common.Views.Loading()
      JobsBoard.mainRegion.show(loadingView);
      
      var fetchingJob = JobsBoard.request("job:entity", id)
      $.when(fetchingJob).done(function(job){
        var jobView = new Show.Job({
          model: job
        });
        JobsBoard.mainRegion.show(jobView);
      });
    }
  }
});

