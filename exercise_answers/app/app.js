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
      <div>
        Seconds in a day: {{60 * 60 * 24}}
      </div>
      <div>
        Weeks in a life: {{365.25 / 7 * lifespan}}
      </div>
    `
  })
  .Class({
    constructor: function() {
      this.lifespan = 80;
      this.isAlive = function isAlive() {
        return this.catAge < 15;
      };
    }
  });




document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});


