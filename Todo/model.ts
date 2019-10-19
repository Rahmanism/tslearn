interface ITodo {
    id: number;
    name: string;
    state: TodoState;
}

enum TodoState {
    Active,
    Completed,
    Deleted
}

interface ITodoService {
    add(todo: ITodo): ITodo;
    delete(todoId: number): void;
    getAll(): ITodo[];
    getById(todoId: number): ITodo;
}
