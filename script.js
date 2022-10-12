// var a;
// a = 69;
// console.log (a);
// console.log(a * 5);

// let S = 56;
// console.log(a + S);

// const b= 5
// console.log (b+a+S);

// var d = 15;
// var d = 12;
// d = 17;
// console.log (d);


// var myName = "Seun";
// console.log (myName);
// let h = "8";
// var f = '9'
// console.log (h);

// console.log ('Hi ' + myName);


// let p = Number(prompt("Input a random number abeg"));
// console.log (p);

// let q = Number(prompt("Input another number abeg"));
// console.log (q);
// let r = alert ("I'm about to add your numbers")
// console.log (p + q);

// var a = Number(prompt("What is a?"));
// var b = Number(prompt("What is b?"));
// let g = alert("a - b is...");
// g = alert (a - b);
// g = a - b;
// let h = alert("a * b is...");
// h = alert (a * b);
// h = a * b;
// console.log(g);
// console.log(h);
// // var c = Number(prompt("What is a?"));

// var j = Number(prompt("Give me a number"));
// alert ("The square root of " + j + " is...");
// alert (j ** 0.5);


// Quadratic equation solver
// var a = Number(prompt("What is a?"));
// var b = Number(prompt("What is b?"));
// var c = Number(prompt("What is c?"));
// var up = ((b**2) - (4*a*c));
// var allUp = math.sqrt(up);
// var down = (2*a);
// var all = allUp/down;
// var ans1 = (-b + allUp)/(down);
// var ans2 = (-b - allUp)/(down);
// alert(ans1 + " and " + ans2);

// Objects
let fadairo = {
    Father : "Adebisi",
    Mother : "Taiwo",
    Number: 5,
    children: ["Seun", "Samson", "Iyanu", "Opeyemi" ],
    fullName: function(){
        return `${fadairo.children[0]} Fadairo` ;
    }
};
console.log(fadairo.Father);
//or
console.log(fadairo['Father']);
 
console.log(fadairo.fullName());  

//For in loop
 for (let people in fadairo ){
    console.log(people);
 }