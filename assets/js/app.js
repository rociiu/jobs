var JobsBoard = new Backbone.Marionette.Application();

JobsBoard.addRegions({
  headerRegion: '#header-region',
  mainRegion: '#main-region'
})

JobsBoard.on('initialize:after', function(){
  console.log('start jobs board app');
  if(Backbone.history) {
    Backbone.history.start()
  }
});

