JobsBoard.module('HeaderApp',function(Header, JobsBoard, Backbone,Marionette,$,_){
  var API = {
    listHeader: function() {
      Header.List.Controller.listHeader();
    }
  }

  Header.on("start", function(){
    console.log('start header')
    API.listHeader();
  });
})

