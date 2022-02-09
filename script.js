const number = document.querySelector("num");
const testButton = document.querySelector("#counter");

let counter = 0;

testButton.addEventListener("click", function() {
    counter++;
    console.log(counter);
})