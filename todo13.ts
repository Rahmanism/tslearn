enum Todo13State {
    Active, 
    Completed,
    Deleted
}

class Smart13Todo {
    name: string;
    _state: Todo13State;

    constructor(name: string, state: Todo13State = Todo13State.Active) {
        this.name = name;
        this._state = state;
    }

    get state() {
        return this._state;
    }

    set state(newState: Todo13State) {
        if (newState == Todo13State.Completed) {
            let canBeCompleted = 
                this._state == Todo13State.Active ||
                this._state == Todo13State.Deleted;
            if (!canBeCompleted) {
                throw new Error("The completed item can't be completed again!");
            }
        }
        this._state = newState;
    }
}

let todo13 = new Smart13Todo("Test");
console.log(todo13.state);
todo13.state = Todo13State.Completed;
console.log(todo13.state);
todo13.state = Todo13State.Completed;

