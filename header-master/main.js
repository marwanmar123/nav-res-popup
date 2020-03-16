const myName = document.getElementById('myName');
const myEmail = document.getElementById('myEmail');
const myPass = document.getElementById('myPass');
const myPass2 = document.getElementById('myPass2');
const textErea = document.getElementById('textErea');
const myTxt = document.getElementById('myTxt');

function myFunction() {
    if (myName.value == '') {
        myName.setAttribute("style", "border:3px solid red");
        myTxt.innerHTML = "the name is invalide"
        myTxt.setAttribute("style", "color: red; text-align:center; font-size:22px");
        return false;
    } else if (myEmail.value == '' || myEmail.value.indexOf("@") == -1) {
        myTxt.innerHTML = "the email is invalide"
        myTxt.setAttribute("style", "color: red; text-align:center; font-size:22px");
        myEmail.setAttribute("style", "border:3px solid red");
        return false;
    } else if (myPass.value == '') {
        myTxt.innerHTML = "mot de pass invalide"
        myTxt.setAttribute("style", "color: red; text-align:center; font-size:22px");
        myPass.setAttribute("style", "border:3px solid red");
        return false;
    } else if (myPass.value.length < 6) {
        myTxt.innerHTML = "password should be more then 6 charac"
        return false;
    } else if (myPass2.value !== myPass.value) {
        myTxt.innerHTML = "mot de pass incorrect"
        myTxt.setAttribute("style", "color: red; text-align:center; font-size:22px");
        myPass2.setAttribute("style", "border:3px solid red");
        return false;
    } else if (textErea.value == '') {
        myTxt.innerHTML = "aucun msg"
        myTxt.setAttribute("style", "color: red; text-align:center; font-size:22px");
        textErea.setAttribute("style", "border:3px solid red");
        return false;
    } else {
        alert('msg env');
        return true;
    }
}
document.getElementById("open_popup").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "block";
})
document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
})