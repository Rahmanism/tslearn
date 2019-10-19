var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonAccess = /** @class */ (function () {
    function PersonAccess() {
    }
    return PersonAccess;
}());
var EmployeeAccess = /** @class */ (function (_super) {
    __extends(EmployeeAccess, _super);
    function EmployeeAccess() {
        var _this = _super.call(this) || this;
        _this.age = 38;
        return _this;
    }
    return EmployeeAccess;
}(PersonAccess));
var p = new PersonAccess();
p.family = "Mostafa";
var e = new EmployeeAccess();
e.age = 38;
