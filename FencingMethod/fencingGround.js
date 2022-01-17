const Ground=(a,b,c,d,e,f,g,r,h,numberOfLayer, rateOfWire)=>{
    const pi=22/7;
    const parameterOfShape= a+b+c+d+e+f+g+pi*r+h;
    const fencingWireLength= parameterOfShape * numberOfLayer;
    const constOfWire= fencingWireLength * rateOfWire ;
    return constOfWire;
};
console.log(Ground(35,30,10,15,8,3,2,7,10,4,9))












side.forEach(element => {
    
});