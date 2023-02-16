// If Else Statements 

// Task 01
// var num1 = 10
// var num2 = 20

// if (num1 === num2) {
//     console.log(`BOOM`)
// } else {
//     console.log(`TRY AGAIN`)    
// }

//====================
//=============================================
//====================


/*
// Task 02
var num1 = 10
var num2 = 20
// var result = num1 + num2

console.log(`${num1} + ${num2} = ${num1 + num2}`)*/

//====================
//=============================================
//====================


// Task 03

/*
// Task 03
var num1 = 10
var num2 = 20
// var result = num1 * num2

console.log(`${num1} x ${num2} = ${num1 * num2}`)*/

//====================
//=============================================
//====================


// Task 04

// var day = 6;
// if (day === 1) {
//     console.log(`Good Week`)
// } else if (day === 2 || day == 3 || day === 4) {
//     console.log(`Good Day today is day number - `, day)
// } else {
//     console.log(`Happy Weekend !`)
// }


// Task 04

//  var month = 20;

// if (month === 1) {
//     console.log(`Happy Weekend !`)
// } else if ((month >= 2) && (month < 10)) {
//     console.log(`Start Work`)
// } else if (month == 10) {
//     console.log(`Get Salary`)
// } else if ((month >= 11) && (month < 20)) {
//     console.log(`Be Happy`)
// } else if ((month >= 20) && (month < 30)) {
//     console.log(`The End!`)
// } else {
//     console.log(`BOOM BOOM`)
// }



// Switch Statements

//====================
//=============================================
//====================



// Task 05

/*var month = prompt("what is your month number ? \n Type 1 between 31. ");

switch(true){
    case (month >=1  && month < 2):
        console.log(`Good Month`)
        alert(`Good Month\nMonth is: ${month}`);
        break;
    case (month >= 2 && month < 10):
        console.log(`Start Work`)
        alert(`Start Work\nMonth is: ${month}`);
        break;
    case (month === 10):
        console.log(`Salary`)
        alert(`Salary\nMonth is: ${month}`);
        break;
    case (month >= 11 && month<  20):
        console.log(`Be Happy`)
        alert(`Be Happy\nMonth is: ${month}`);
        break;
    case (month >= 20 && month < 30):
        console.log(`The End`)
        alert(`The End\nMonth is: ${month}`);
        break;
    case (month === 31):
        console.log(`Boom Boom`)
        alert(`Boom Boom\nMonth is: ${month}`);
        break;
    case (month > 31):
        confirm(`Try again, type 1 between 31`)
        location.reload();
        break;
    default:
        break;
}
// alert(`Month is: ${month}`); */

//====================
//=============================================
//====================


// Task 06

// var holiday = prompt(`What holiday your celebrating right now ? `)

// switch(true){
//     case (holiday == "Purim"):
//         alert(`Happy Purim`)
//         console.log(`Happy Purim`)
//     break;

//     case (holiday == "PassOver"):
//         alert(`Clean your house`)
//         console.log(`Clean your house`)
//     break;

//     case (holiday == "Shavoout"):
//         alert(`Eat Milk`)
//         console.log(`Eat Milk`)
//     break;

//     case (holiday == "Suckot"):
//         alert(`Build Sucka`)
//         console.log(`Build Sucka`)
//     break;
//     case (holiday = ""):
//         location.reload();
//     default:
//         break;
// }


//====================
//=============================================
//====================


// Task 07

// var P1_name = "Nissim";
// var P1_score = getRandomScore(100);

// var P2_name = "Johnny";
// var P2_score = getRandomScore(100);

// //var random_score = getRandomScore();

// switch (true) {
//     case (P1_score > P2_score):
//         console.log(`Player ${P1_name} Won, he throw further away: ${P1_score} meters, Player ${P2_name}, ${P2_score} meters`)
//         alert(`Player ${P1_name}  Won, he throw further away: ${P1_score} meters, Player ${P1_name}, ${P1_score} meters`)
//         break;
//     case (P1_score == P2_score):
//         console.log(`Same distance of throwing`)
//         break;
//     default:
//         console.log(`Player ${P2_name}  Won, he throw further away: ${P2_score} meters, Player ${P1_name}, ${P1_score} meters`)
//         alert(`Player ${P2_name}  Won, he throw further away: ${P2_score} meters, Player ${P1_name}, ${P1_score} meters`)
//         break;
// }

//====================
//=============================================
//====================


// Task 08


// var num = getRandomScore(100);

// if (num % 2 == 0) {
//     console.log(`Positive number: ${num}`)
// } else {
//     console.log(`Negative number: ${num}`)

// }

//====================
//=============================================
//====================


// Task 09

// var num = getRandomScore(100);
// var num2 = getRandomScore(100);

// switch (true) {
//     case (num > num2):
//         console.log(`Number 1 bigger, ${num}| Num2, ${num2}`)
//         break;
//     default:
//         console.log(`Number 2 bigger, ${num2}| Num1, ${num}`)
//         break;
// }

//====================
//=============================================
//====================


// Task 10

// var numbers = []

// for (let num = 0; num < 7; num++) {
//     var randomNumberInteger = Math.floor(Math.random() * 100 + 1)
//     // console.log(`${randomNumberInteger}`)
//     numbers.push(randomNumberInteger)
//     // console.log(`${numbers}`)
//     var sum = numbers.reduce(sumnum)
// }
// var avg = sum / numbers.length;
// console.log(`${numbers}`)
// console.log(`${sum}`)
// console.log(`Average is: ${avg}, and total number is: ${sum}`)
// בבסיס עשיתי חישוב של כל המספרים הרנדומלים ברשימה 
// חלקי כמות האיברים שיש ברשימה


// ניסיתי ללמוד עוד דרכים לעשות את זה כדי ללמוד להתפקח
/*var randomNumbersList = [];

for (var i = 0; i < 7; i++) {
    var randomNumbers = Math.floor(Math.random() * 100) + 1;
    randomNumbersList.push(randomNumbers);
}

var sum = randomNumbersList.reduce((all, number) => all + number, 0);
console.log(`all, number`)
const average = sum / randomNumbersList.length;

console.log(`The average of ${randomNumbersList} is ${average.toFixed(0)}`);*/


//Task 11
/*
var username = prompt(`What's your Name`);
var age = prompt(`What's your age`);
var ageInt = parseInt(age)
var running_km = prompt(`How many kilometers you ran ? \n Only between to 0 to 50 Km`);
var running_kmInt = parseInt(running_km)

if (!username && !age && !running_km && running_km <= 50) {
    console.log(`didn't worked`)
} else {
    switch (true) {
        case (ageInt >= 30) && (ageInt < 50) && (running_kmInt >= 30) && (running_kmInt < 50):
            console.log(`Your in great shape ${username}, at your age which is ${age}, raned for ${running_km} Km's - CASE 1`)
            break;
        case (ageInt >= 30) && (ageInt < 50) &&(running_kmInt >= 10) && (running_kmInt < 30):
            console.log(`Your in good shape ${username}, at your age which is ${age}, raned for ${running_km} Km's - CASE 2`)
            break;
        case (ageInt >= 30) && (ageInt < 50) && (running_kmInt >= 0) && (running_kmInt < 10):
            console.log(`Your shape needs improvement${username}, at your age which is ${age}, raned for ${running_km} Km's - CASE 3`)
            break;

        case (ageInt >= 18) && (ageInt < 30) && (running_kmInt >= 25) && (running_kmInt < 50):
            console.log(`Your in great shape ${username}, at your age which is ${age}, raned for ${running_km} Km's - CASE 4`)
            break;

        case (ageInt >= 18) && (ageInt < 30) && (running_kmInt < 25):
            console.log(`There's place for improvement${username}, at your age which is ${age}, raned for ${running_km} Km's - CASE 5`)
            break;

        default:
            break;
    }
}




console.log(`You name, ${username}, Your age, ${age}, Your running Km, ${running_km}`)
*/

//Task 12

/*var randomHour = Math.floor(Math.random() * 20) + 5; // מבצע רנדומיה של 0 ל1 ואני מכפיל ב- 20 כדי לכפל תוצאה של 19.9999 ואז מחבר ב5 כדי שיתחיל ב5 ויסתיים ב24
console.log(randomHour)

if (randomHour >= 5 && randomHour <= 11) {
    console.log('Good Morning')
} else if (randomHour >= 12 && randomHour <= 17) {
    console.log('Good noon')
} else if (randomHour >= 18 && randomHour <= 23) {
    console.log('Good Night')
} else {
    console.log(' Well it\'s probably between 24 to 4 which i didn\'t declared')
}

























*/
/***************************************************\
    ****** לא לגעת זה לחלק מהשיעורי בית פה********
\***************************************************/

function sumnum(total, num) {
    return total + num;
  }

function getRandomScore(max) {
    return Math.floor(Math.random() * max);
}

/***************************************************\
    *********************************************
\***************************************************/