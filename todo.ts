interface ITodo {
    name: string;
    state: TodoState;
}

enum TodoState {
    New,
    Active,
    Complete,
    Delete
}

// var todo = {
//     name: "Bank",
//     get state() {
//         return this._state;
//     },
//     set state(newState) {
//         if (newState == TodoState.Complete) {
//             var canBeCompleted =
//                 this._state == TodoState.Active;
//             if (!canBeCompleted) {
//                 throw "Item must be active first to become completed.";
//             }
//         }
//         this._state = newState;
//     }
// }

// todo.state = TodoState.New;
// console.log(todo.state);

class SmartTodo {
    name: string;
    _state: TodoState;
    constructor(name: string) {
        this.name = name;
        this._state = TodoState.New;
    }

    get state() {
        return this._state;
    }
    set state(newState: TodoState) {
        if (newState == TodoState.Complete) {
            let canBeCompleted =
                this._state == TodoState.Active ||
                this._state == TodoState.New;
            if (!canBeCompleted) {
                throw "Item must be new or active to become completed.";
            }
        }
        this._state = newState;
    }
}

let todo1 = new SmartTodo("Shopping"); 
todo1.state = TodoState.Delete;
console.log(todo1.state);
todo1.state = TodoState.Complete;
console.log(todo1.state);
