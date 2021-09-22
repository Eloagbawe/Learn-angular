var Greet = /** @class */ (function () {
    function Greet(name) {
        var _this = this;
        this.sayHello = function () {
            console.log("Hello " + _this.name + ", Welcome to Angular!");
        };
        this.name = name;
        console.log(name);
    }
    return Greet;
}());
var greet = new Greet('Elo');
greet.name = 'Ivan';
greet.sayHello();
