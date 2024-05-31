// function addTwo(num){
//     return num+2;
// }
// addTwo(5);
/////// It is Problemtic  num is :any ..... mistake occur more
function addTwo(num) {
    return num + 2;
    // return something different so how is it handle
    //   return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("satyam", "sat@ga.com");
signUpUser("satyam", "abc@gmail.com", "1234");
getUpper("satyam");
var num = addTwo(5);
//return more tehn one  data types like
//  function getValue(val:number):boolean{
//     if(val>5){
//         return true;
//     }
//     return  "status ok";
//  }
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spideramn", "Iron MAN", "CA"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
    // return 2;
});
// map already have detail information about ts
function showErrorMsg(errmsg) {
    console.log(errmsg);
}
function handleErrorMsg(errmsg) {
    throw new Error(errmsg);
}
