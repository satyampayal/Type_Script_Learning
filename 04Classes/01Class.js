"use strict";
// class User{
//     public email:string
//     private name:string// in js # used to private 
//     readonly city:string="jaiPur"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = "jaiPur";
    }
    return User;
}());
var satyam = new User("sat@.com", "satyam");
satyam.city;
