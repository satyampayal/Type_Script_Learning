
/*
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

*/

// Type alice intro 
type User={
    name:string;
    email:string;
    isActive:boolean;
}
//type MyString=string

function createuser(user:User):User{
    return {name:"",email:"",isActive:true}

}

createuser({name:"",email:"",isActive:true})

 export {};