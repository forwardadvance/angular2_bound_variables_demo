// Exercise Start Point for the Bound Variables Angular 2 exercise

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:``
  })
  .Class({
    constructor: function() {

    }
  });




var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });

// Bootstrap
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);


