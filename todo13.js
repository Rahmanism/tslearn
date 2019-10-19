var Todo13State;
(function (Todo13State) {
    Todo13State[Todo13State["Active"] = 0] = "Active";
    Todo13State[Todo13State["Completed"] = 1] = "Completed";
    Todo13State[Todo13State["Deleted"] = 2] = "Deleted";
})(Todo13State || (Todo13State = {}));
var Smart13Todo = /** @class */ (function () {
    function Smart13Todo(name, state) {
        if (state === void 0) { state = Todo13State.Active; }
        this.name = name;
        this._state = state;
    }
    Object.defineProperty(Smart13Todo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == Todo13State.Completed) {
                var canBeCompleted = this._state == Todo13State.Active ||
                    this._state == Todo13State.Deleted;
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
todo13.state = Todo13State.Completed;
console.log(todo13.state);
todo13.state = Todo13State.Completed;
