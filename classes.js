class person{
    constructor(fname, lname){
        this.firstName = fname;
        this.lastname = lname;
    }
    greeting (){
        return `welcome ${this.firstName} ${this.lastname}`;
    };
};
// const output = new person("John", "Wick");,
// console.log(output);
// console.log(output.greeting());

class Contact extends person{
    constructor(fname, lname, phone, city){
        super(fname, lname);
        this.phone = phone;
        this.city = city;
    }
    getContact(){
        return `phone: ${this.phone} city: ${this.city}`;
    }
}

const output = new Contact("john", "Carter", 9359306022, "peerbhurhan");
console.log(output);