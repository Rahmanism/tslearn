interface ITodo {
    name: string;
    state: TodoState;
}

enum TodoState {
    Active,
    Completed,
    Deleted
}

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

class Todo implements ITodo {
    name: string;
    _state: TodoState;

    constructor(name: string, state: TodoState = TodoState.Active) {
        this.name = name;
        this._state = state;
    }

    get state() {
        return this._state;
    }

    set state(newState: TodoState) {
        if (newState == TodoState.Completed) {
            let canBeCompleted =
                this._state == TodoState.Active ||
                this._state == TodoState.Deleted;
            if (!canBeCompleted) {
                throw new Error("The completed item can't be completed again!");
            }
        }
        this._state = newState;
    }
}

abstract class TodoStateChanger {
    constructor(protected newState: TodoState) { }

    abstract canChangeState(todo: Todo): boolean;

    changeState(todo: Todo): Todo {
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

    canChangeState(todo: Todo): boolean {
        return !!todo &&
            (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
    }
}

class TodoService {
    private static _lastId: number = 0;

    constructor(private todos: ITodo[]) {}

    static getNextId() {
        return (TodoService._lastId += 1);
    }

    private get nextId() {
        return TodoService.getNextId();
    }

    private set nextId(nextId) {
        TodoService._lastId = nextId - 1;
    }

    public add(todo: ITodo) {
        var newId = this.nextId;
    }

    private getAll() {
        return this.todos;
    }
}


let todoCompleteTest = new ChangeTodoToComplete();

// let todo13 = new SmartTodo("Test");
let todoTest = new Todo("Test");
console.log(todoTest.state);
todoTest.state = TodoState.Completed;
console.log(todoTest.state);
// todo13.state = TodoState.Completed;

