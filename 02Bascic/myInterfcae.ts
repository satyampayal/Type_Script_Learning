
interface User{
    readonly dbId:number
    email:string
    userId:number
    googleId?:string
   // startTrial:()=>string
   startTrial():String
   getCuppon(couponname:string):number
}

// we are not need to reopening 
interface User{
    githubToken:string
}
// inherit  
// you can change in interface 
// where after :type you can't change in defination 
interface Admin extends User{
    role:"admin" | "learners"
}
// type do like this
// type admin =User & 
//{ honey:string}
const satyam:User={dbId:12,email:"s@.com",
userId:121,
githubToken:"Token ",
startTrial:()=>{
    return "trial Start"

},
getCuppon:(couponname:"satyam")=> {
    return  10
    
},
}
satyam.email="satyam@.com"