const number = document.querySelector("num");
const upButton = document.querySelector("up");
const downButton = document.querySelector("down");
// const testButton = document.querySelector("#counter");

let newNumber = number.innerHTML;
let count = 0;

const goUp = () => {
    count = count + 1
    newNumber = count;
    console.log(count);
}

const goDown = () => {
    count = count - 1;
    newNumber = count;
    console.log(count);
}

upButton.addEventListener("click", goUp);
downButton.addEventListener("click", goDown);



// testButton.addEventListener("click", function() {
//     counter++;
//     console.log(counter);
// });