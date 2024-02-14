let number = Math.floor(Math.random() * 3);
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

const arr1 = ['valentines day', 'love', 'passion'];
const arr2 = ['is the one', 'Oulalala', 'moments'];
const arr3 = ['just one per year', 'I love you', 'with you'];

for(let i = 0; i < arr1.length; i++)
{
        console.log(arr1[number] + ' ' + arr2[number] + ' ' + arr3[number]);
}