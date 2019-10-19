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
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Complete"] = 2] = "Complete";
    TodoState[TodoState["Deleted"] = 3] = "Deleted";
})(TodoState || (TodoState = {}));
var TodoStateChanger = /** @class */ (function () {
    function TodoStateChanger(newState) {
        this.newState = newState;
    }
    TodoStateChanger.prototype.changeState = function (todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    };
    return TodoStateChanger;
}());
var CompleteTodoStateChanger = /** @class */ (function (_super) {
    __extends(CompleteTodoStateChanger, _super);
    function CompleteTodoStateChanger() {
        return _super.call(this, TodoState.Complete) || this;
    }
    CompleteTodoStateChanger.prototype.canChangeState = function (todo) {
        return !!todo &&
            (todo.state == TodoState.Active ||
                todo.state == TodoState.New);
    };
    return CompleteTodoStateChanger;
}(TodoStateChanger));
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    Object.defineProperty(TodoService.prototype, "nextId", {
        get: function () {
            return TodoService.getNextId();
        },
        set: function (nextId) {
            TodoService._lastId = nextId - 1;
        },
        enumerable: true,
        configurable: true
    });
    TodoService.getNextId = function () {
        return (TodoService._lastId += 1);
    };
    TodoService.prototype.add = function (todo) {
        var newId = this.nextId;
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService._lastId = 0;
    return TodoService;
}());
