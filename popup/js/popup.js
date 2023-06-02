const tableAlphaNumMin = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "f", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const tableAlphaNumMaj = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const tableSpecials = [
    "!", "#", "$", "%", "^", "*", "(", ")"
];

const tableNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let password = '';
var btn = document.getElementsByClassName('GenPass');
var sizeInput = document.getElementsByClassName('size');
var showbox = document.getElementById('showbox');



btn[0].addEventListener("click", () => {
    sizeNumber = sizeInput[0].value;
    console.log("size :" + sizeNumber);
    if (sizeNumber < 12) {
        generate();
    } else {
        generate(sizeNumber);
    }
    display();
}, false);

function display() {
    if (showbox.lastChild) {
        showbox.removeChild(showbox.lastChild);
    }
    var content = document.createTextNode(password);
    showbox.appendChild(content);
}
function generate(size = 12) {
    password = "";
    console.log('generating password with lengh : ' + size);
    for (let index = 1; index <= size; index++) {
        console.log("boucle N°: " + index);
        var random = Math.floor((Math.random() * 4) + 1);
        switch (random) {
            case 1:
                addToPass(1, tableAlphaNumMin[Math.floor((Math.random() * 24) + 1)]);
                break;
            case 2:
                addToPass(2, tableAlphaNumMaj[Math.floor((Math.random() * 24) + 1)]);
                break;
            case 3:
                addToPass(3, tableSpecials[Math.floor((Math.random() * 6) + 1)]);
                break;
            case 4:
                addToPass(4, tableNum[Math.floor((Math.random() * 8) + 1)]);
                break;
        }
        console.log("Genarating password : " + password + "\nnumber char : " + countChars(password));
    }
    console.log("Genarated password : " + password + "\nnumber char : " + countChars(password));
}

function addToPass(int, param) {
    // console.log("number :" + int + " param :" + param);
    password = password.concat('', param);
}
function countChars(param) {
    var nbChars = 0;
    Array.from(param).forEach(char => {
        nbChars++
    });
    return nbChars;
}
