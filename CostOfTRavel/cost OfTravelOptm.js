const costOfTravel=(d,mi,cost)=>Math.ceil ((d/mi)*cost);
console.log("Hderabad Travel Cost", costOfTravel(300,13,112));
console.log("Pune Travel Cost", costOfTravel(550,15,112));
console.log("Aurangabad Travel Cost", costOfTravel(260,13,112));