// bind an expression
// bind an attribute on the class
// vm variable
// Live binding - setInterval, zones

// bind to a function on the class
// functions should not have side effects

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      {{catName}}
      <div>
        age: {{catAge}}
      </div>
      <div>
        alive: {{isAlive()}}
      </div>
    `
  })
  .Class({
    constructor: function() {
      this.catName = "Molly";
      this.catAge = 12;
      this.isAlive = function isAlive() {
        return this.catAge < 15;
      };
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


// Finally bootstrap
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);


