
//////Addition funtion

document.write("<h3>Addition funtion</h3>");
function add(a, b) {
    return a + b;
}

var a = parseFloat(prompt("Enter Your First Addition Number"));
var b = parseFloat(prompt("Enter Your Second Addition Number"));

var answer = add(a, b);

document.write("Your Answer By Addition  = " + answer);


//////Subtraction Function

document.write("<h3>Subtraction funtion</h3>");
function sub(c, d) {
    return c - d;
}

var c = parseFloat(prompt("Enter Your First Subtraction Number"));
var d = parseFloat(prompt("Enter Your Second Subtraction Number"));

secanwser = sub(c, d);
document.write("Your Answer By Subtraction = " + secanwser);


////////Multiply function
document.write("<h3>Multiply funtion</h3>");
function mul(e, f) {
    return e * f;
}

var e = parseFloat(prompt("Enter Your First Multiply Value"));
var f = parseFloat(prompt("Enter Your Second Multiply Value"));

thirdanswer = mul(e, f);

document.write("Your Answer By Multiplication = " + thirdanswer)


/////////Division function

document.write("<h3>Division funtion</h3>");
function div(g, h) {
    return g / h;
}

var g = parseFloat(prompt("Enter Your First Division Value"));
var h = parseFloat(prompt("Enter Your Second Division Value"));

fouranswer = div(g, h);


document.write("Your Answer By Division  =  " + fouranswer);

//////////////Even Number
document.write("<h3>Even funtion</h3>");

var even = parseFloat(prompt("Check Even Number"));

if (even % 2 === 0) {
    document.write("This Is Even Number = " + even);
} else {
    document.write("This Is Not A Even Number");
}

/////////////Odd Number

document.write("<h3>Odd Number</h3>");

var odd = parseFloat(prompt("Check Odd Number"));

if (odd % 2 === 1) {
    document.write("This Is Odd Number = " + odd);
} else {
    document.write("This Is Not A Odd Number");
}

//////////Leap year 
document.write("<h3>Leap Year</h3>");

year =parseFloat(prompt("Check Leap Year "));

function leapyear(year) {
    return year % 4 === 0; 
}

if (leapyear(year)) {
    document.write("Its a leap year = " + year);
} else {
    document.write("Its not a leap year");

}