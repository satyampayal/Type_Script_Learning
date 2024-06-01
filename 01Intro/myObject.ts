
const user={
    name:"satyam",
    email:"satyam@gmai.com",
    isActive:true
}

function createuser({name:string,isPaid:boolean}){

}
let newUser={name:"satyam",isPaid:false,email:"saty@gmail.com"}
createuser(newUser);// in There email is Optional that is not much preety we used i such scenerio -interface

function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:799}
}

 export {};