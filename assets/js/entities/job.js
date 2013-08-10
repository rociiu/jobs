JobsBoard.module('Entities', function(Entities, JobsBoard, Backbone, Marionette, $, _){
  Entities.Job = Backbone.Model.extend({
    url: function() {
      return "http://ruby-china.org/api/topics/" + this.get("id") + ".json";
    }
  })

  Entities.JobCollection = Backbone.Collection.extend({
    url: "http://ruby-china.org/api/topics/node/25.json",
    model: Entities.Job,
    comparator: function(job) {
      return -new Date(job.get('created_at'));
    }
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
      return promise;
    },
    getJobEntity: function(id) {
      var job = new Entities.Job({id: id});
      var defer = $.Deferred();
      job.fetch({
        success: function(data) {
          defer.resolve(data)
        }
      });
      var promise = defer.promise();
      return promise;
    }
  }

  JobsBoard.reqres.setHandler("job:entities", function(){
    return API.getJobEntities();
  });

  JobsBoard.reqres.setHandler("job:entity", function(id){
    return API.getJobEntity(id);
  });

  
});

