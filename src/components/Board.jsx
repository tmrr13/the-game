import React from "react";

import { Square } from "./Square";

export class Board extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  // toggleClass = (e) => {
  //   // let firstCard, secondCard;
  //   // let openCard = {
  //   //   openCard: false,
  //   // };
  //
  //     this.setState ({
  //       active: !this.state.active,
  //   });
  //        console.log(e);
  //
  // };

  // renderImg = () => {
  //   if(this.state.active) {
  //     return <img src="./5D.png"/>
  //   }
  //
  // };

  // test = () => {
  //   let str = "text base asdf";
  //   let sstr = str.split(" ")
  //   let arrGeneral = sstr.map((item, index, arr)=> {
  //     let ssss = item.split("");
  //         ssss.splice(0, 1);
  //         ssss.splice(-1, 1);
  //     let ура = ssss.join("");
  //     return ура;
  //   });
  //   let wer = arrGeneral.join(" ");
  //     // console.log(wer)
  // };

  //
  // Опишите на русском или одном из языков программирования алгоритм вычисления разности максимального среди элементов,
  // имеющих четные значения, и максимального среди элементов, имеющих нечетные значения, в заданном целочисленном массиве
  // из 30 положительных элементов (в предположении, что в массиве есть и четные, и нечётные элементы).

  // differenceMax = (arr) => {
  //   let evenNumberMax = 0;
  //   let oddNumberMax = 0;
  //   let i = 0;
  //   while (i < arr.length) {
  //     if (arr[i] % 2 === 0 && arr[i] > evenNumberMax) {
  //       evenNumberMax = arr[i];
  //     }
  //     if (arr[i] % 2 === 1 && arr[i] > oddNumberMax) {
  //       oddNumberMax = arr[i]
  //     }
  //     i++
  //   }
  //   return evenNumberMax - oddNumberMax;
  // };



  // evenNumbers = () => {
  //   const arrNumbers = [-100,-10000,24,34,31,78,25,];
  //   let numbers5 = [];
  //   let numbers4 = [];
  //   let numbers3 = [];
  //   let otherNumbers = [];
  //   for (let i = 0; i < arrNumbers.length; i++) {
  //     if(arrNumbers[i] % 5 === 0) {
  //       numbers5.push(arrNumbers[i]);
  //     } else if() {
  //       otherNumbers.push(arrNumbers[i])
  //       console.log(arrNumbers[i])
  //     }
  //     if(arrNumbers[i] % 4 === 0) {
  //       numbers4.push(arrNumbers[i]);
  //       console.log(numbers4)
  //     } else {
  //       otherNumbers.push(arrNumbers[i])
  //       console.log(otherNumbers)
  //     }
  //     if(arrNumbers[i] % 3 === 0) {
  //       numbers3.push(arrNumbers[i]);
  //       console.log(numbers3)
  //     } else {
  //       otherNumbers.push(arrNumbers[i])
  //       console.log(otherNumbers)
  //     }
  //   }
  // };

  // evenNumbers = () => {
  //   const arrNumbers = [1,1,0,45,45,77,377,888,677,-9,-10000,24,98,55,52,51,39,-39,34,78,10000];
  //   const arrResult = [];
  //   const group = arrNumbers.map(function (item, index) {
  //     return [item + arrNumbers[index+1]]
  //   });
  //   const sum = group.slice(0, -1);
  //   for(let i = 0; i < sum.length; i++) {
  //     if(sum[i] % 2 === 0 && sum[i] % 4 !== 0) {
  //       arrResult.push(sum[i])
  //     }
  //   }
  //    console.log(arrResult) ;
  // };

  // clear = (elem) => {
  //   elem.innerHTML = ""
  // };

  // evenNumbers = () => {
  //  let div = document.createE
  // };

  // Дан целочисленный массив из 20 элементов. Элементы массива могут принимать целые значения от –10 000 до 10 000 включительно.
  // Опишите на одном из языков программирования алгоритм, позволяющий найти и вывести количество пар элементов массива,
  // в которых сумма элементов делится на 2, но не делится на 4. В данной задаче под парой подразумеваются два соседних элемента массива.
  //
  // Исходные данные объявлены так, как показано ниже на примерах для некоторых языков программирования.
  // Запрещается использовать переменные, не описанные ниже, но разрешается не использовать некоторые из описанных переменных.

  // primeNumbers = () => {
  //   let numbers = 14;
  //   for (let i = 2; i <= numbers; i++) {
  //     for (let j = 2; j < i; j++) {
  //       console.log(j)
  //     }
  //   }
  // };

   addText = () => {
    const root = document.getElementById("root");
    const box = document.createElement('div');

    box.style.overflowY = 'scroll';
    box.style.width = '220px';
    box.style.height = '300px';
    root.append(box);
    const width = box.offsetWidth - box.clientWidth;
    console.log(width)
  };

  render() {
    // let arrNumbers = [1,2,3,4,5,6,7,8,9,3,22,33,66,65];
    return (
      <div>
        <div>{this.addText()}</div>
        <div></div>
      </div>
    );
  }
}


// У нас есть пустой DOM-элемент elem и строка text.
//
// Какие из этих 3-х команд работают одинаково?
//
// elem.append(document.createTextNode(text)) <b>текст</b>
// elem.innerHTML = text текст
// elem.textContent = text <b>текст</b>


// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.


  // clear = (elem) => {
  //   elem.innerHTML = ""
  // };




//
//
// Почему остаётся "aaa"?
// важность: 1
// Запустите этот пример. Почему вызов remove не удалил текст "aaa"?
//
// <table id="table">
//   aaa
//   <tr>
//     <td>Тест</td>
//   </tr>
// </table>

// Создайте список
// важность: 4
// Напишите интерфейс для создания списка.
//
// Для каждого пункта:
//
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
// Все элементы должны создаваться динамически.
//
// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.


  // addText = () => {
  //   const ul = document.createElement("ul");
  //   const root = document.getElementById("root");
  //   root.append(ul);
  //   while (true) {
  //     const text = prompt("text", "")
  //
  //     if(!text) {
  //       break;
  //     }
  //
  //     const li = document.createElement('li');
  //     li.innerHTML = text;
  //     ul.append(li);
  //   }
  // };

// Размеры и прокрутка элементов
// scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

 // addText = () => {
 //    const root = document.getElementById("root");
 //    const box = document.createElement('div');
 //
 //    box.style.overflowY = 'scroll';
 //    box.style.width = '220px';
 //    box.style.height = '300px';
 //    root.append(box)
 //    const width = box.offsetWidth - box.clientWidth;
 //
 //  };

// Поместите мяч в центр поля
// ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
// ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'