add = document.getElementById("add");

add.addEventListener("click", (e) => {
    console.log("Its working..............");

    tilte = document.getElementById("title").value;
    descri = document.getElementById("descri").value;
    date = document.getElementById("date").value;

    if ((tilte && descri && date) == "") {
        alert("please Fill This Boxes");
    } else {


        if (localStorage.getItem("dataJson") == null) {

            dataarrayjson = [];

            dataarrayjson.push([tilte, descri, date]);

            localStorage.setItem("dataJson", JSON.stringify(dataarrayjson));
        } else {

            dataarrayjsonstr = localStorage.getItem("dataJson");


            dataarrayjson = JSON.parse(dataarrayjsonstr);
            dataarrayjson.push([tilte, descri, date]);

            localStorage.setItem("dataJson", JSON.stringify(dataarrayjson));
        }


        tablebody = document.getElementById("tableBody");

        data = "";

        dataarrayjson.forEach((element , index) => {

            data += `
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td>${element[2]}</td>
              <td>Delete</td>
            </tr>
            `


        });




        tablebody.innerHTML = data;



    }

});