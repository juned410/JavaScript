const fencingRectCost=(l,b, numberOfLayer, rateOfWire)=>{
    const parameterOfShape= l+b+l+b;
    const fencingWireLength= parameterOfShape * numberOfLayer;
    const constOfWire= fencingWireLength * rateOfWire ;
    return constOfWire;
};
  console.log(fencingRectCost(30,40,4,12))