"use strict";
// import * as tpm from 'TodoApp.Model';
// import './DataAccess';
Object.defineProperty(exports, "__esModule", { value: true });
//import * as TodoApp from "./model";
var imTodoApp = require("./model");
var Model = imTodoApp.TodoApp.Model;
var DataAccess_1 = require("./DataAccess");
var task1 = {
    id: 5,
    name: 'Test',
    state: Model.TodoState.Active
};
var task2 = {
    id: 12,
    name: 'A completed task',
    state: Model.TodoState.Completed
};
var service = new DataAccess_1.TodoApp.DataAccess.TodoService([]);
service.add(task1);
service.add(task2);
var tasks = service.getAll();
tasks.forEach(function (task) {
    console.log("ID: " + task.id + ", Name: " + task.name + ", Status: [" + Model.TodoState[task.state] + "]");
});
