"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "satyam",
    email: "satyam@gmai.com",
    isActive: true
};
function createuser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "satyam", isPaid: false, email: "saty@gmail.com" };
createuser(newUser); // in There email is Optional that is not much preety we used i such scenerio -interface
function createCourse() {
    return { name: "reactjs", price: 799 };
}
