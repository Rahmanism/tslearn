// import * as tpm from 'TodoApp.Model';
// import './DataAccess';

//import * as TodoApp from "./model";
import imTodoApp = require('./model.js');
import Model = imTodoApp.TodoApp.Model;
import { TodoApp } from './DataAccess.js';


var task1: Model.ITodo = {
    id: 5,
    name: 'Test',
    state: Model.TodoState.Active
};

var task2: Model.ITodo = {
    id: 12,
    name: 'A completed task',
    state: Model.TodoState.Completed
}

let service = new TodoApp.DataAccess.TodoService([]);
service.add(task1);
service.add(task2);

let tasks = service.getAll();

tasks.forEach(task => {
    console.log(`ID: ${task.id}, Name: ${task.name}, Status: [${Model.TodoState[task.state]}]`);
});
