// --------------------------------closure problem----------------------------
function x(){
    var i= 1;
    setTimeout(function(){
        console.log(i);
    }, 1000)
    console.log("ist code piece ")

}
x()

// ----------------------------------------------------
// function x() {
//     var i = 1;
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000)

//     console.log("second code piece")
// }
// x();




// -----------------------------------------------------------
// function x(){
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000)       
//     }
//     console.log("third code piece")
// }

// x()



// -----------------------------------------------------------
// function x(){
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000)       
//     }
//     console.log("forth code piece")
// }

// x()




// --------------------------------------------
// function x(){
//     for (var i = 1; i <=5; i++) {
//         function closure(x){
//             setTimeout(function(){
//                 console.log(x);
//             }, x * 1000)
//         }
//     closure(i);
//     }
//     console.log("fifth code piece")
// }
// x();






