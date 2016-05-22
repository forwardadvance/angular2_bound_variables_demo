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
      <div>
        Years until we can construct Empire State building from cats: {{yearsUntilCatsWeigh(331122430)}}
      </div>
      <div>
        Years until we can replace Earth with cats: {{yearsUntilCatsWeigh(5972000000000000000000000)}}
      </div>
    `
  })
  .Class({
    constructor: function() {
      this.lifespan = 80;
      this.yearsUntilCatsWeigh = function(goal) {
        var weight = 1;
        var year = 0;
        while (weight < goal) {
          year ++;
          weight *=6;
        }
        return year;
      };
    }
  });




document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, []);
});


