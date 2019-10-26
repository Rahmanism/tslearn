// import * as tpm from 'TodoApp.Model';
// import './DataAccess';
System.register(["./model.js", "./DataAccess.js"], function (exports_1, context_1) {
    "use strict";
    var imTodoApp, Model, DataAccess_js_1, task1, task2, service, tasks;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (imTodoApp_1) {
                imTodoApp = imTodoApp_1;
            },
            function (DataAccess_js_1_1) {
                DataAccess_js_1 = DataAccess_js_1_1;
            }
        ],
        execute: function () {// import * as tpm from 'TodoApp.Model';
            // import './DataAccess';
            Model = imTodoApp.TodoApp.Model;
            task1 = {
                id: 5,
                name: 'Test',
                state: Model.TodoState.Active
            };
            task2 = {
                id: 12,
                name: 'A completed task',
                state: Model.TodoState.Completed
            };
            service = new DataAccess_js_1.TodoApp.DataAccess.TodoService([]);
            service.add(task1);
            service.add(task2);
            tasks = service.getAll();
            tasks.forEach(function (task) {
                console.log("ID: " + task.id + ", Name: " + task.name + ", Status: [" + Model.TodoState[task.state] + "]");
            });
        }
    };
});
