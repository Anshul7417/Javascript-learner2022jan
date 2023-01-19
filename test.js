function greet(name, greetText="Greetings from JavaScript"){
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is returned");
}


let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
// let greetText1 = "Good Morning";
// greet(name, greetText1);
// greet(name1, greetText1);
// greet(name2, greetText1);
// let returnVal = greet(name3);     //function is not returning but it is also possible
// console.log(returnVal)


// let b=5;
//         if(b==5){
//          let b=6;
//         }
//         console.log("b: ",b);