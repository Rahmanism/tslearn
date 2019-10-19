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
        enumerable: true,
        configurable: true
    });
    TodoService.prototype.add = function (todo) {
        todo.id = this.nextId;
        this.todos.push(todo);
        return todo;
    };
    TodoService.prototype.delete = function (todoId) {
        var toDelete = this.getById(todoId);
        if (toDelete) {
            var deleteIndex = this.todos.indexOf(toDelete);
            this.todos.splice(deleteIndex, 1);
        }
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.prototype.getById = function (todoId) {
        var filtered = this.todos.filter(function (x) { return x.id == todoId; });
        if (filtered.length) {
            return filtered[0];
        }
        return null;
    };
    TodoService._lastId = 0;
    return TodoService;
}());
