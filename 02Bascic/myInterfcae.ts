
interface User{
    readonly dbId:number
    email:string
    userId:number
    googleId?:string
   // startTrial:()=>string
   startTrial():String
   getCuppon(couponname:string):number
}
const satyam:User={dbId:12,email:"s@.com",
userId:121,
startTrial:()=>{
    return "trial Start"

},
getCuppon:(couponname:"satyam")=> {
    return  10
    
},
}
satyam.email="satyam@.com"