JobsBoard.module("JobsApp.Show", function(Show, JobsBarod, Backbone, Marionette, $, _) {
  Show.Job = Marionette.ItemView.extend({
    template: "#job-view"
  })
})

