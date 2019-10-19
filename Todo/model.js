var TodoState;
(function (TodoState) {
    TodoState[TodoState["Active"] = 0] = "Active";
    TodoState[TodoState["Completed"] = 1] = "Completed";
    TodoState[TodoState["Deleted"] = 2] = "Deleted";
})(TodoState || (TodoState = {}));
