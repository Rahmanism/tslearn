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
    TodoState[TodoState["Active"] = 0] = "Active";
    TodoState[TodoState["Completed"] = 1] = "Completed";
    TodoState[TodoState["Deleted"] = 2] = "Deleted";
})(TodoState || (TodoState = {}));
// class SmartTodo {
//     name: string;
//     _state: TodoState;
//     constructor(name: string, state: TodoState = TodoState.Active) {
//         this.name = name;
//         this._state = state;
//     }
//     get state() {
//         return this._state;
//     }
//     set state(newState: TodoState) {
//         if (newState == TodoState.Completed) {
//             let canBeCompleted = 
//                 this._state == TodoState.Active ||
//                 this._state == TodoState.Deleted;
//             if (!canBeCompleted) {
//                 throw new Error("The completed item can't be completed again!");
//             }
//         }
//         this._state = newState;
//     }
// }
var Todo = /** @class */ (function () {
    function Todo(name, state) {
        if (state === void 0) { state = TodoState.Active; }
        this.name = name;
        this._state = state;
    }
    Object.defineProperty(Todo.prototype, "state", {
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
    return Todo;
}());
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
var ChangeTodoToComplete = /** @class */ (function (_super) {
    __extends(ChangeTodoToComplete, _super);
    function ChangeTodoToComplete() {
        return _super.call(this, TodoState.Completed) || this;
    }
    ChangeTodoToComplete.prototype.canChangeState = function (todo) {
        return !!todo &&
            (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
    };
    return ChangeTodoToComplete;
}(TodoStateChanger));
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    TodoService.getNextId = function () {
        return (TodoService._lastId += 1);
    };
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
    TodoService.prototype.add = function (todo) {
        var newId = this.nextId;
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService._lastId = 0;
    return TodoService;
}());
var todoCompleteTest = new ChangeTodoToComplete();
// let todo13 = new SmartTodo("Test");
var todoTest = new Todo("Test");
console.log(todoTest.state);
todoTest.state = TodoState.Completed;
console.log(todoTest.state);
// todo13.state = TodoState.Completed;
