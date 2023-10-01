var numbers=[];

function guest(){
    var num = parseFloat(prompt("Enter your Numbers");
    return parseInt(num);
}

for (let index = 0; index < 10; index++) {
    num = guest();
    numbers.push(num);
}

numbers.sort();
if (num) {    
    document.write("Your Smallest Numbers<br>")
} else {
    document.write("Enter Only Numbers")
}

for (let index = 0; index < numbers.length; index++) {
    document.write("<br>"+numbers[index]+"<br>");
    
}