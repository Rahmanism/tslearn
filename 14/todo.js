var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Complete"] = 2] = "Complete";
    TodoState[TodoState["Deleted"] = 3] = "Deleted";
})(TodoState || (TodoState = {}));
class TodoStateChanger {
    constructor(newState) {
        this.newState = newState;
    }
    changeState(todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}
class CompleteTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(TodoState.Complete);
    }
    canChangeState(todo) {
        return !!todo &&
            (todo.state == TodoState.Active ||
                todo.state == TodoState.New);
    }
}
class TodoService {
    constructor(todos) {
        this.todos = todos;
    }
    get nextId() {
        return TodoService.getNextId();
    }
    set nextId(nextId) {
        TodoService._lastId = nextId - 1;
    }
    static getNextId() {
        return (TodoService._lastId += 1);
    }
    add(todo) {
        var newId = this.nextId;
    }
    getAll() {
        return this.todos;
    }
}
TodoService._lastId = 0;
