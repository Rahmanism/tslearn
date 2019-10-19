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

// class Todo implements ITodo {
//     id: number;
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

// let todoCompleteTest = new ChangeTodoToComplete();

// // let todo13 = new SmartTodo("Test");
// let todoTest = new Todo("Test");
// console.log(todoTest.state);
// todoTest.state = TodoState.Completed;
// console.log(todoTest.state);
// todo13.state = TodoState.Completed;

