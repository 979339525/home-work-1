let value = prompt("Enter the number", 1)

if (parseInt(value) % 2 === 0) {
    alert("Четное");
} else {
    alert("Не четное");
}

let name = prompt("Введите ваше имя");
let letterName = name.toLowerCase().slice(0, 1)

if (name.length % 2 === 0 && letterName === "a") {
    alert("Name with letter: a");
} else {
    alert("Nothing");
}