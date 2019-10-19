interface IIdGenerator {
    nextId: number;
}

class TodoService implements ITodoService, IIdGenerator {
    private static _lastId: number = 0;

    constructor(private todos: ITodo[]) { }

    static getNextId() {
        return (TodoService._lastId += 1);
    }

    get nextId() {
        return TodoService.getNextId();
    }

    add(todo: ITodo): ITodo {
        todo.id = this.nextId;
        this.todos.push(todo);
        return todo;
    }

    delete(todoId: number): void {
        let toDelete = this.getById(todoId);
        if (toDelete) {
            let deleteIndex = this.todos.indexOf(toDelete);
            this.todos.splice(deleteIndex, 1);
        }
    }

    getAll(): ITodo[] {
        return this.todos;
    }

    getById(todoId: number): ITodo {
        let filtered = this.todos.filter(x => x.id == todoId);
        if (filtered.length) {
            return filtered[0];
        }
        return null;
    }
}
