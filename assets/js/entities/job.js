JobsBoard.module('Entities', function(Entities, JobsBoard, Backbone, Marionette, $, _){
  Entities.Job = Backbone.Model.extend({
    url: function() {
      return "http://ruby-china.org/api/topics/" + this.get("id") + ".json";
    }
  })

  Entities.JobCollection = Backbone.Collection.extend({
    url: "http://ruby-china.org/api/topics/node/25.json",
    model: Entities.Job
  })

  var API = {
    getJobEntities: function() {
      var jobs = new Entities.JobCollection()
      var defer = $.Deferred();
      jobs.fetch({
        success: function(data) {
          defer.resolve(data)
        }
      })
      var promise = defer.promise()
      $.when(promise).done(function(jobs) {
      })
      return promise;
    }
  }

  JobsBoard.reqres.setHandler("job:entities", function(){
    return API.getJobEntities();
  });

  
});

