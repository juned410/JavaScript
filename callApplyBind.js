// const person = {
//     firstName: "juned",
//     getFullname:function (lastName){
//         return this.firstName+" "+lastName;
//     },
// };

// const person2 = {
//     firstName: "Juned",
// };

// console.log(person.getFullname())

// const getDetails = person.getFullname.call(person, "wick");
// console.log(getDetails);

// function getFullname2(lastName, city){
//     return this.firstName+" "+lastName+" "+city
// }
// console.log(getFullname2.call(person2, "khan", "mumbai"));
// console.log(getFullname2.apply(person2, ["Ansari", "Nanded"]));
// console.log(getFullname2.bind(person2)("Shaikh", "Aurangabad"));



const person = {
    firstName: "juned",
    getFullname:function (lastName,phone,city){
         return this.firstName+" "+lastName+" "+phone+" "+city
    },
};
function getFullname2(lastName,phone,city){
    return this.firstName+" "+lastName+" "+phone+" "+city
}

// console.log(person.getFullname.call(person, "Khan", "65488498498", "Dehli"));
// console.log(person.getFullname.apply(person, ["Shaikh", "5556545446", "Mumbai"]));
// console.log(person.getFullname.bind(person)("Ansari", "84883340098", "Banglore"));


console.log(getFullname2.call(person, "Khan", "  6548849849", "Dehli"));
console.log(getFullname2.apply(person, ["Shaikh", "5556545446", "Mumbai"]));
console.log(getFullname2.bind(person)("Ansari", "8488334009", "Banglore"));