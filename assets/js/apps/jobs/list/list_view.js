JobsBoard.module("JobsApp.List", function(List, JobsBarod, Backbone, Marionette, $, _) {
  List.Job = Marionette.ItemView.extend({
    template: "#job-list-item",
    tagName: "tr"
  })

  List.Jobs = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "#job-list",
    itemView: List.Job,
    itemViewContainer: 'tbody',
  })
  
}) 
