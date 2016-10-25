/**
 * Created by Agnieszka on 2016-10-25.
 */
//1//


function showHigherValue(firstNumber, secondNumber) {
    return firstNumber > secondNumber
}

//2//

function roundoffDown(number) {
    return Math.floor(number);
}

//3//

function roundoffUp(number) {
    return Math.ceil(number);
}

//4//

function stringToNumber(value) {
    if (typeof(value) !== "string") {
        console.log("The input value needs to be a string!");
    }
    else {
        return parseInt(value);
    }
};

//5//

function calculateDelta(a, b, c) {
    return Math.pow(b, 2)-4 * a * c;
}

//6//

function isNumber(input) {
    return typeof(input) === "number";
}

//7//

function baseToPower(x, y) {
    return Math.pow(x, y);
}

//8//

function roundoffTwoDigit(number) {
    return parseFloat(number.toFixed(2));
};

//9//

function isSquareRoot(number) {
    return Math.sqrt(number);
}

//10//

function highestAbsoluteValue(firstNumber,secondNumber, thirdNumber) {
    return Math.max(Math.abs(firstNumber), Math.abs(secondNumber), Math.abs(thirdNumber));
};

//11//

function isRandomNumber() {
    return Math.random()
}



console.log(showHigherValue(9, 5));
console.log(roundoffDown(1.656454));
console.log(roundoffUp(1.656454));
console.log(stringToNumber("55"));
console.log(calculateDelta(5, 4, 1));
console.log(isNumber(26));
console.log(baseToPower(2, 3));
console.log(roundoffTwoDigit(2.54545646));
console.log(isSquareRoot(4));
console.log(highestAbsoluteValue (-7, 8, -9));
console.log(isRandomNumber());