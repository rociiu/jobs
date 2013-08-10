JobsBoard.module("JobsApp.Show", function(Show, JobsBarod, Backbone, Marionette, $, _) {
  Show.Controller = {
    showJob: function(id) {
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

