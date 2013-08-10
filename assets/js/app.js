var JobsBoard = new Backbone.Marionette.Application();

JobsBoard.addRegions({
  headerRegion: '#header-region',
  mainRegion: '#main-region'
})

JobsBoard.navigate = function(route, options) {
  options || (options={});
  Backbone.history.navigate(route, options)
}

JobsBoard.getCurrentRoute = function(){
  return Backbone.history.fragment
};

JobsBoard.on('initialize:after', function(){
  console.log('start jobs board app');
  if(Backbone.history) {
    Backbone.history.start()

    if(this.getCurrentRoute() === "") {
      console.log("trigger jobs list")
      JobsBoard.trigger("jobs:list");
    }
  }
});

