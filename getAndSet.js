// const person ={
//     firstName:"Asfan",
//     lastName:"Khan",
//     getFullName (){
//         return `First Name: ${this.firstName} LastName: ${this.lastName}`;
//     },
// };
// console.log(person.getFullName())

                            // OR
const aadmi ={
    firstName:"Mohammed",
    lastName:"juned",
   get getFullName (){
        return `First Name: ${aadmi.firstName} LastName: ${aadmi.lastName}`;
    },
    set getFullName(name){
        this.firstName=name
    }
};
aadmi.getFullName="Shaikh"
console.log(aadmi.getFullName)