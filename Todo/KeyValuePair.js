var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var KeyValuePairPrinter = /** @class */ (function () {
    function KeyValuePairPrinter(pairs) {
        this.pairs = pairs;
    }
    KeyValuePairPrinter.prototype.print = function () {
        this.pairs.forEach(function (pair) {
            console.log(pair.key + ": " + pair.value);
        });
    };
    return KeyValuePairPrinter;
}());
