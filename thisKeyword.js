
//if this function is an constructor function then it refer to a constructor object

const movies = {
    title: "John Wick",
    showmovie(){
      return   this.title;
    },
    
};
// console.log(movies.showmovie());


movies.rating = function showRating(){
    return "check rating", this;

};
// console.log("check rating ---->" ,movies.rating());



function checkthis() {
    return this;
};
// console.log (checkthis());


function SomeFunction(x){
    this.abc = x; 
    this.rank =[1,4,4,2,3];
    this.draw = function (){
        this.rank.map(function (items){
            return console.log(items ===1 ? this :0);
        }.bind (this)
        );
    };
};
const output = new SomeFunction(10);
console.log(output.draw());