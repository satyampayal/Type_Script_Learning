
let greetSting:string ="Satyam Payal";
console.log(greetSting);

//greetSting =4; // it give error

// number 
//let uId:number=24;
    // >> Not neccecery al time :number 
// also you do 
let uId=3453.67;
uId.toFixed();
//uId="kva";

// boolean 
let isLoggedIn:boolean =true;
isLoggedIn=false;

// any 
let hero;
function getHero(){
    return "thor";

}
hero =getHero();
// i such scneraio whre what comes in return we use :any type
// it bacically it not check any type its top to check itself ..


// --------------------//
// now to overcome re-declared blocked scopeed use 
// export {} -- tempory its works
export {}