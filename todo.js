var TodoState;
(function (TodoState) {
    TodoState[TodoState["Active"] = 0] = "Active";
    TodoState[TodoState["Completed"] = 1] = "Completed";
    TodoState[TodoState["Deleted"] = 2] = "Deleted";
})(TodoState || (TodoState = {}));
var Smart13Todo = /** @class */ (function () {
    function Smart13Todo(name, state) {
        if (state === void 0) { state = TodoState.Active; }
        this.name = name;
        this._state = state;
    }
    Object.defineProperty(Smart13Todo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == TodoState.Completed) {
                var canBeCompleted = this._state == TodoState.Active ||
                    this._state == TodoState.Deleted;
                if (!canBeCompleted) {
                    throw new Error("The completed item can't be completed again!");
                }
            }
            this._state = newState;
        },
        enumerable: true,
        configurable: true
    });
    return Smart13Todo;
}());
var todo13 = new Smart13Todo("Test");
console.log(todo13.state);
todo13.state = TodoState.Completed;
console.log(todo13.state);
todo13.state = TodoState.Completed;
