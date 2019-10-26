var TodoApp;
(function (TodoApp) {
    var Model;
    (function (Model) {
        var TodoState;
        (function (TodoState) {
            TodoState[TodoState["Active"] = 0] = "Active";
            TodoState[TodoState["Completed"] = 1] = "Completed";
            TodoState[TodoState["Deleted"] = 2] = "Deleted";
        })(TodoState = Model.TodoState || (Model.TodoState = {}));
    })(Model = TodoApp.Model || (TodoApp.Model = {}));
})(TodoApp || (TodoApp = {}));
