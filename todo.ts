interface ITodo {
    name: string;
    _state: TodoState;
}

enum TodoState {
    Active, 
    Completed,
    Deleted
}

class SmartTodo implements ITodo {
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

let todo13 = new SmartTodo("Test");
console.log(todo13.state);
todo13.state = TodoState.Completed;
console.log(todo13.state);
todo13.state = TodoState.Completed;

