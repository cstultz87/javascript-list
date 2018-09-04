var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried === true) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; //kg 
var heightMark = 1.95; //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}

// Boolean logic 
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { //between 13 and 20 = age >= 13 and < age 20
    console.log(firstName + ' is a teenager.');
} else if (age > 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

/*     AND (&&) true if ALL are true */
/*     OR (||) true if ONE is true  */
/*     NOT (!) inverts true/false value */


/* The Ternary Operator and Switch Statements */
var firstName = 'John';
var age = 22;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
    : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* if (age >= 18) {
    var drink = 'beer';
}else {
    var drink = 'juice'
}
 */

//Switch statement 
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else.');
}

/* 
    var firstName = 'John';
    var age = 20;

    if (age < 13) {
        console.log(firstName + ' is a boy.');
    } else if (age >= 13 && age < 20) {
        console.log(firstName + ' is a teenager.');
    } else if (age >= 20 && age < 30) {
        console.log (firstName + ' is a young man.');
    } else {
        console.log(firstName + ' is a man.');
    } */


/* Switch statement */
age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + 'is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

/* Truthy and Falsy values and equality operators  */

/* falsy values: undefined, null, 0, '', NaN */
/* truthy values: NOT falsy values  */

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('variable has NOT been defined');
}

/* Equality operators  */
if (height == '23') {
    console.log('The == operator does type coercion!');
}

/* CODIN CHALLENGE */

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreJohn + ' points');
} else {
    console.log('There is a draw');
}


/* FUNCTIONS */

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, FirstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');



/* Function Statements and Expressions  */
/* function whatDoYouDo(job, firstName) {} */

// function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + 'drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'john'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));


/* Arrays  */

// Initialize new array 
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


// Different data types 
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');  /* adds to the end of array */
john.unshift('Mr'); /* adds to beginning of array */
console.log(john);

john.pop(); /* removes the last element of an array item  */
john.pop();
john.shift(); /* removes the first element from an array item */
console.log(john);

john.indexOf(1990); /* returns the position of the array item */
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


/* CODING CHALLENGE: ARRAYS: TIP CALCULATOR */

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);



/* Objects and properties */


// Object literal
var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: 1990, 
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher', 
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane ['lastName'] = 'Smith';
console.log(jane);
