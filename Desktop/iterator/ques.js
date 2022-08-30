const person={
    name:"bisma",
    address:{
        city:"srinagar",
        lane:"humzah lane",
        zip:{
            pincode:190001
        }
    },
    state:"jammu n kashmir"
}
console.log(JSON.stringify(person));
// output will be like this -----------------
// console.log
// person.name:"bisma",
// person.address.city:"srinagar",
// person.address.lane:"humzah lane",
// person.zip.pincode:190001,
// person.state:"jammu and kashmir"