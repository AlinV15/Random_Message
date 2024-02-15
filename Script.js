const arr1 = ['valentines day', 'love', 'passion', 'flowers', 'night'];
const arr2 = ['is the one', 'oulalala', 'moments', 'fall in'];
const arr3 = ['just one per year', 'I love you', 'with you', 'bed', 'your arms'];
let number1 = Math.floor(Math.random() * arr1.length);
let number2 = Math.floor(Math.random() * arr2.length);
let number3 = Math.floor(Math.random() * arr3.length);

const arrOfMessages = [arr1, arr2, arr3];
let numberArray = Math.floor(Math.random()* arrOfMessages.length);
const firstWordChanger = (string) =>{
        let firstLetter = string[0].toUpperCase();
        string = firstLetter + string.slice(1);
        
        return string;
     };
/*
switch (number)
{
    case 0: console.log('The life is good');
            break;
    case 1: console.log('Hello honey!');
            break;
    case 2: console.log('Programming is a plesure');
            break;
    case 3: console.log('Go with me in the amazing world of programming');
            break;
    case 4: console.log('Happy Valentines Day!!!');
            break;
    case 5: console.log('I LOVE YOU!!!<3');
            break;
}*/
        //console.log(arr1[number1] + ' ' + arr2[number2] + ' ' + arr3[number3]);

const randomMessage = (array, num1, num2, num3) =>{
     let num = Math.floor(Math.random()* array.length);
     let messageText = "";
     
     let firstWord = firstWordChanger( array[num][num1]);
     messageText += firstWord;
     let mirror1 = num;
     while(num === mirror1)
     {
        num = Math.floor(Math.random()* array.length);
     } 

     let mirror2 = num;
     messageText += ' ' + array[num][num2];

     while(num === mirror1 || num === mirror2)
     {
        num = Math.floor(Math.random()* array.length);
     } 

     messageText += ' ' + array[num][num3];
     return messageText;
};

console.log(randomMessage(arrOfMessages, number1,number2,number3));


