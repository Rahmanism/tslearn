// if we don't use namesapce, we import like this:
// import Model = require("./model");
// import ITodo = Model.ITodo;

import imTodoApp = require("./model.js");

export namespace TodoApp.DataAccess {
    import Model = imTodoApp.TodoApp.Model;
    import ITodo = Model.ITodo;

    let _lastId: number = 0;
    function generateTodoId() {
        return _lastId += 1;
    }

    export interface ITodoService {
        add(todo: ITodo): ITodo;
        delete(todoId: number): void;
        getAll(): ITodo[];
        getById(todoId: number): ITodo;
    }

    export class TodoService implements ITodoService {
    
        constructor(private todos: ITodo[]) { }
    
        add(todo: ITodo): ITodo {
            todo.id = generateTodoId();
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
}