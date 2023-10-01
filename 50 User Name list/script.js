var namelist=[];

function namecerate() {
    var names = prompt("Enter Your Names");
    return names;
}

for (let index = 1; index <=50; index++) {
    names = namecerate();
    namelist.push(names); 
}

document.write("<h1>Your Name List</h1>");
document.write("<ol>");
for (let index = 0; index < namelist.length; index++) {    
    
    document.write("<li>"+namelist[index]+"</li>"+ "<br>");
}
document.write("</ol>"); 