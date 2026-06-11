const textBox = document.getElementById("userText");
const btn = document.getElementById("btn");
const qrImg = document.getElementById("qrImg");

btn.addEventListener("click", function(){

    let value = textBox.value.trim();

    if(value === ""){
        alert("Please enter something");
        return;
    }

    qrImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
    + encodeURIComponent(value);

    qrImg.style.display = "block";
});