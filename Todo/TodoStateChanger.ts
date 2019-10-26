import imTodoApp = require('./model');
import ITodo = imTodoApp.TodoApp.Model.ITodo;
import TodoState = imTodoApp.TodoApp.Model.TodoState;

abstract class TodoStateChanger {
    constructor(protected newState: TodoState) { }

    abstract canChangeState(todo: ITodo): boolean;

    changeState(todo: ITodo): ITodo {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }

        return todo;
    }
}

class ChangeTodoToComplete extends TodoStateChanger {
    constructor() {
        super(TodoState.Completed);
    }

    canChangeState(todo: ITodo): boolean {
        return !!todo &&
            (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
    }
}
