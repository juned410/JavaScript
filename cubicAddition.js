const cubicAddition = (nums)=>{
    let cubicsum=0;
    nums.forEach(element => {
       cubicsum= cubicsum+element**power;
    });
    return cubicsum;
};

console .log (cubicAddition());