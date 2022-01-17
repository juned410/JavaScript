const Circle=(r,numberOfLayer, rateOfWire)=>{
    const pi=22/7;
    const parameterOfShape= 2*pi*r;
    const fencingWireLength= parameterOfShape * numberOfLayer;
    const constOfWire= fencingWireLength * rateOfWire ;
    return constOfWire;
};
console.log(Circle(15,8,37))