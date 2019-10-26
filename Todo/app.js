"use strict";
// import * as tpm from 'TodoApp.Model';
// import './DataAccess';
exports.__esModule = true;
//import * as TodoApp from "./model";
var imTodoApp = require("./model.ts");
var Model = imTodoApp.TodoApp.Model;
var DataAccess_ts_1 = require("./DataAccess.ts");
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
var service = new DataAccess_ts_1.TodoApp.DataAccess.TodoService([]);
service.add(task1);
service.add(task2);
var tasks = service.getAll();
tasks.forEach(function (task) {
    console.log("ID: " + task.id + ", Name: " + task.name + ", Status: [" + Model.TodoState[task.state] + "]");
});
