interface TakePhoto{
    cameraMode:string
    filter:string
    burst:number

}
interface Strory{
    createStory():void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
}
class YouTube implements TakePhoto,Strory{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        public shorts:string
    ){}
    createStory(): void {
        console.log("story wil created ")
    }
}