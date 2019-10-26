namespace TodoApp.Model {
    export interface ITodo {
        id: number;
        name: string;
        state: TodoState;
    }

    export enum TodoState {
        Active,
        Completed,
        Deleted
    }

}
