/**
 * Created by lenovo on 2017/6/22.
 */
function Sleeper() {
    var self = this;
    var FUNC = 0;
    var TIME = 1;

    self.step    = 0;
    self.actions = [];

    self.push = function(func, time) {
        if (typeof(time) == 'undefined') {
            time = 0;
        }
        self.actions.push([func, time]);
        return self;
    }
    self.run_next = function() {
        if (self.actions.length > 0) {
            console.log('length: ', self.actions.length)
            var action = self.actions[self.step];
            func = action[FUNC];
            time = action[TIME];
            if (typeof(func) == 'function') {
                func();
            } else {
                eval(func);
            }
            self.actions.shift();
            setTimeout(self.run_next, time);
        }
    }
    self.run = function() {
        self.run_next();
    }
    return self;
}

var s = new Sleeper()
var a;
var b;
s.push('a=3;console.info("set a")')
    .push('b=4;console.info("set b")', 5000)
    .push(function() {console.info(a);}, 2000)
    .push('console.info(b)')
    .run();