/**
 * Created by Agnieszka on 2016-10-25.
 */
//1//

function showHigherValue(number1, number2) {
    if (number1 > number2) {
        return true;
    }
    else {
        return false;
    }
};

//2//

function roundoffDown(number) {
    return Math.floor(number);
}

//3//

function roundoffUp(number) {
    return Math.ceil(number);
}

//4//

function StringToNumber(value) {
    if (typeof(value) !== "string") {
    console.log("The input value needs to be a string!");
    }
    else {
        return parseInt(value);
    }
};

//5//

function calculateDelta(a, b, c) {
    return Math.pow(b, 2)-4*a*c;
}

//6//

function ifNumber(input) {
    if(typeof(input) === "number") {
        return true
    }
    else {
    return false
    }
};

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

function highestAbsoluteValue(number1,number2, number3) {
    return Math.max(Math.abs(number1), Math.abs(number2), Math.abs(number3));
};

//11//

function isRandomNumber() {
    return Math.random()
}



showHigherValue(9, 5);
roundoffDown(1.656454);
roundoffUp(1.656454);
StringToNumber("55");
calculateDelta(5, 4, 1);
ifNumber(26);
baseToPower(2, 3);
roundoffTwoDigit(2.54545646);
isSquareRoot(4);
highestAbsoluteValue (-7, 8, -9);
isRandomNumber();