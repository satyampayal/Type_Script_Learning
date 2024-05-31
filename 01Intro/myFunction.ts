// function addTwo(num){
//     return num+2;
// }
// addTwo(5);
/////// It is Problemtic  num is :any ..... mistake occur more

function addTwo(num: number) {
    return num + 2;
    // return something different so how is it handle
    //   return "hello";
}

function getUpper(val: string) {
    return val.toUpperCase();
}
function signUpUser(name: string, email: string, password: string) { }

var loginUser = (name: string, email: string, isPaid: boolean = false) => {

}
loginUser("satyam", "sat@ga.com");
signUpUser("satyam", "abc@gmail.com", "1234");

getUpper("satyam");
let num: number = addTwo(5);

//return more tehn one  data types like
//  function getValue(val:number):boolean{
//     if(val>5){
//         return true;
//     }
//     return  "status ok";
//  }

var getHello = (s: string): string => {
    return "";

}

const heroes=["thor","spideramn","Iron MAN","CA"];
heroes.map((hero):string =>{
    return `hero is ${hero}`;
   // return 2;
})
// map already have detail information about ts

function showErrorMsg(errmsg:string):void{
    console.log(errmsg);
    
}
function handleErrorMsg(errmsg:string):never{
    throw new Error(errmsg);
    
}

