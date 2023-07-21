let submitBtn = document.getElementById("submit-btn");
let formInput = document.getElementById("forminput");

let firstNameInput = document.querySelector("#first-name");
let lastNameInput = document.querySelector("#last-name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let messageArea = document.querySelector("#Textarea1");

submitBtn.addEventListener("click", ()=>{
    const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
    const emailAdd = emailInput.value;
    const phoneNumber = phoneInput.value;
    const mainMessage = messageArea.value;

    let watapp = "https://wa.me/2349033036122?text";

    var win = window.open(`https://wa.me/${2349033036122}?text=${fullName} %0a
    ${mainMessage}`, '_blank');
    win.focus();

})
