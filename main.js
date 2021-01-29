let button1 = document.getElementsByClassName("button1")
let parentOfButton1 = button1.parentElement
let background = document.getElementsByClassName("background")
console.log(background[0]);

// button1.addEventListener("click", gantiWarnaGreen);

function gantiWarna(warna) {
    background[0].style.backgroundColor = warna
}