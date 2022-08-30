//---------------pgm of consoling sum of 2 no.s  which will return promise .
// function sum(num1, num2){
//  return new Promise(function(resolve,reject){
//    if( num1 && num2 > 0)
//    {
//    // console.log("promise resolve")
//    resolve(num1 + num2);

//    }
//    else{
//    // console.log("promise reject")
//    reject("promise reject");
//    }
   
//  })
// }
// sum(10,40).then(function(res){
//    console.log("sum of two num is " , res)

// }).catch(function(rej){
//    console.log("sorry", rej)
//    return null;
// })




//---------------------- pgm of console sum of two numbers using async await wuth try catch.
// -----more effcient thn promises because we can  call sum() function many time , rather than making a function again n again in promise.

function sum(num1, num2){
  return num1+ num2;
}
async function bisma() {
   try {
     const x= await sum (10,70);
     console.log("sum of two no's is ",x)
   } catch (error) {
      console.log(error,error.message);
   }
}

bisma();