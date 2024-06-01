abstract class takePhoto{
    constructor(
        public cameramode:string,
        public filter:string
    ){}
    abstract  getSepia():void
    getRellTime():number{
        // some complex task
        return 8;
    }
}

class Instagram extends takePhoto{
    constructor(public cameramode:string,
        public filter:string){
            super(cameramode,filter)
        }
    getSepia(): void {
        console.log("get Sepia")
    }

}


