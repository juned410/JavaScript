const Square=(a, numberOfLayer, rateOfWire)=>{
    const parameterOfShape= a+a+a+a;
    const fencingWireLength= parameterOfShape * numberOfLayer;
    const constOfWire= fencingWireLength * rateOfWire ;
    return constOfWire;
};
   console.log(Square(10,10,10))