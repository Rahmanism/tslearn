System.register(["./model"], function (exports_1, context_1) {
    "use strict";
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
    var imTodoApp, TodoState, TodoStateChanger, ChangeTodoToComplete;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (imTodoApp_1) {
                imTodoApp = imTodoApp_1;
            }
        ],
        execute: function () {
            TodoState = imTodoApp.TodoApp.Model.TodoState;
            TodoStateChanger = /** @class */ (function () {
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
            ChangeTodoToComplete = /** @class */ (function (_super) {
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
        }
    };
});
