var namelist =[];

function yourname(){
    var names =prompt("Enter Your names");
    return names;
    
}


for (let index = 1; index <=50; index++) {
    names = yourname();
        namelist.push(names+"<br>");
        
    }
    document.write("<h1>Your Names List<br>" + namelist + "</h1>");