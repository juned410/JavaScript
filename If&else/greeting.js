// function greeting(time){
//  if(typeof time !== "number"){
//     return "please provide a valid input"
//  }
//    else if(time >=6 && time <12){
//        return "Good morning"; 
//     }else if(time>=12 && time<=16){
//         return "good noon";
//     }else if(time >16 && time<=19){
//         return "good evening";
//     } else {
//         return "good night";
//     }
// }

// console.log(greeting(ten))




function erroro(num){
    if (typeof num !== "number"){
        return "please provide a valid input" 
    }else if(num % 3===0 && num%5===0){
        return "fizzbiz"
    }else if(num % 3===0){
        return "fizz"
    }else if(num%5===0){
        return "biz"
    }else{
        return "not a fizzbiz number"
    }
}
console.log(erroro(11))
