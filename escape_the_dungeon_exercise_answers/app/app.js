var locationModel = {
  name: "Nondescript Corridor",
  description: "It is very dark. To the north you can just make out a faint glimmer of golden light.",
  exits: "North"
}

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      <h1>Escape the Dungeon!</h1>
      <div>
        <p>{{location.name}}</p>
        <p>{{location.description}}</p>
      </div>
    `
  })
  .Class({
    constructor: function() {
      this.location = locationModel;

    }
  });




/**
  * The App Module
  */
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


/**
  * Finally bootstrap
  */
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);


