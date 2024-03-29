// if we don't use namesapce, we import like this:
// import Model = require("./model");
// import ITodo = Model.ITodo;
System.register([], function (exports_1, context_1) {
    "use strict";
    var TodoApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {// if we don't use namesapce, we import like this:
            // import Model = require("./model");
            // import ITodo = Model.ITodo;
            (function (TodoApp) {
                var DataAccess;
                (function (DataAccess) {
                    var _lastId = 0;
                    function generateTodoId() {
                        return _lastId += 1;
                    }
                    var TodoService = /** @class */ (function () {
                        function TodoService(todos) {
                            this.todos = todos;
                        }
                        TodoService.prototype.add = function (todo) {
                            todo.id = generateTodoId();
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
                        return TodoService;
                    }());
                    DataAccess.TodoService = TodoService;
                })(DataAccess = TodoApp.DataAccess || (TodoApp.DataAccess = {}));
            })(TodoApp || (TodoApp = {}));
            exports_1("TodoApp", TodoApp);
        }
    };
});
