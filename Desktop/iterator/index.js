function* gernerators(){

    // console.log("ist iterator");
    // yield 1;

    // console.log("second iteraor");
    // yield 2;

    // console.log("third iteraor");
    // yield 9;

    let id=1;
    while(true){
        console.log(id);
        yield id;
        id++;
    }


}

 const generatorObject=gernerators()
 

//  console.log(gernerators());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
// console.log(generatorObject.next());


