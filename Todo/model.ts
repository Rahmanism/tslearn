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

namespace TodoApp.DataAccess {
    import ITodo = TodoApp.Model.ITodo;
    export interface ITodoService {
        add(todo: ITodo): ITodo;
        delete(todoId: number): void;
        getAll(): ITodo[];
        getById(todoId: number): ITodo;
    }
}