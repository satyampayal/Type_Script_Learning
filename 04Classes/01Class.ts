// class User{
//     public email:string
//     private name:string// in js # used to private 
//     readonly city:string="jaiPur"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }

class User{
    protected _courseCount=1
    readonly city:string="jaiPur"
    constructor(
       public email:string,
        private name:string,
        //public userId:string
    ){  
    }
    // geeter 
    get getAppleEmail():string{
        return `apples${this.email}`;
    }
   
    get courseCount():number{
        return this._courseCount;
    }

     // seter
     set courseCount(courseNum){
      if(courseNum<=1){
        throw new Error("Course count should be more then 1")
      }
      this._courseCount=courseNum;
     }

     // private method
     private deleteToken(){
        console.log("deleted token")
     }
     // protected method/ data member  --> when we have to midify method by inherit the method
}

class SubUser extends User{
    isFamily:boolean=true;
    changeCourseCount(){
        this._courseCount=4;
    }
}

const satyam=new User("sat@.com","satyam");
satyam.city;
export {}