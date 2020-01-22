function getRandomInt(max) {
    max = max || 1000;
    return Math.floor(Math.random() * max) + 1;
 }

console.log(getRandomInt());

 function isNumber(n) {
     return !isNaN(parseFloat(n)) && isFinite(n)
 }

 const numberToGuess = getRandomInt()
 console.log(numberToGuess);

 let inputNumb;
 while (true) {
     let inputNumb = prompt("Введите число:", 0)

     if (inputNumb === null) break
     if (!isNumber(inputNumb)) {
         alert('Вы ввели не число')
         continue
     }

     if (Number(inputNumb) > numberToGuess) {
        alert('Вы ввели слишком большое число');
    }
     if (Number(inputNumb) < numberToGuess) {
        alert('Вы ввели слишком маленькое число');
    }

     if (Number(inputNumb) === numberToGuess) {
         alert('Поздравляю, вы угадали!');
         console.log(getRandomInt());
     } else {
         alert('try again!');
     }
    }