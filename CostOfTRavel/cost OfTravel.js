const costOfTravel=(d,mi,cost)=>{
    const fuelrequired= d/mi;
    const totalcost=fuelrequired*cost;
    return Math.ceil (totalcost);
};

console.log(costOfTravel(300,13,112));