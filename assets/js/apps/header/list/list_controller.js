JobsBoard.module("HeaderApp.List", function(List, JobsBoard, Backbone,Marionette,$,_){
  List.Controller = {
    listHeader: function() {
      var links = JobsBoard.request("header:entities");
      var headers = new List.Headers({collection: links});

      headers.on("brand:clicked", function(){
        JobsBoard.trigger("jobs:list");
      });

      headers.on("itemview:navigate", function(childview, model){
        var url = model.get("url")
        if (url == "jobs") {
          JobsBoard.trigger("jobs:list");
        } 
        else if (url == 'about') {
          JobsBoard.trigger("about:show");
        }
        else {
          throw "No such sub-application: " + url;
        }
      })

      JobsBoard.headerRegion.show(headers);
    },

    setActiveHeader: function(headerUrl){
      var links = JobsBoard.request("header:entities");
      var headerToSelect = links.find(function(header){
        return header.get("url") === headerUrl;
      });
      headerToSelect.select();
      links.trigger("reset");
    }
  }
})


