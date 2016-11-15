// bind an expression
// bind an attribute on the class
// bind to a function on the class
// functions should not have side effects

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      Hello!
      <p>
        The cat name was: <strong>{{cat.name}}</strong>
      </p>
      <p>
        The cat age was: <strong>{{cat.age}}</strong>
      </p>
      <p>
        The cat's status was: {{isAlive()}}
      </p>
    `
  })
  .Class({
    constructor: function() {
      this.cat = {
        name: "Pugee",
        age: 12
      }
      this.isAlive = () => {
        // this.cat.age = 99;
        return this.cat.age < 15;
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


