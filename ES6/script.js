const printName=(name)=>"hi "+name;
console.log(printName("khaja"));

const printBill=(name,bill)=>
    `h1 ${name} plz pay ${bill}`;

console.log(printBill("khaja",40));

const person = {
    name: "Noam Chomsky",
    age: 92
}
const {name,age}=person;
console.log(name,age);