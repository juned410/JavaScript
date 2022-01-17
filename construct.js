function Construct(radius){
    this.radi=radius;
    this.pi=3.14;
    this.area=function(){
        return this.pi * this.radi * this.radi;
    };
    return this;
}

const circle1 = new Construct(10);
console.log(circle1)

// function Construct(l,b){
//     return const area= l*b;
    
// }
// console.log(Construct(5, 10));

// const Construct=(l,b)=>{
//     return 
//     l*b;
// }
// console.log(Construct(5,7));

