const person = {
    name:"bisma",
    age:40,
    loc:"srinagar",
    greet() {
        console.log("hi i am " + this.name);
    }
}

// const data = ({name})=>{
//     console.log(name)
// }
// data(person)

const { name , loc} = person;
console.log(name , loc);