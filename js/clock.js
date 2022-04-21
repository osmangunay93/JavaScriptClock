
// Prompt ile İsim Girişi
let fullName = prompt("Lütfen İsminizi Giriniz: ")
let myNameDOM = document.querySelector("#myName")

myNameDOM.innerHTML=fullName


function tarihSaat() {
    var date = new Date().toLocaleString();
    document.getElementById("myClock").innerHTML = date;
}

setInterval(tarihSaat, 10); 



