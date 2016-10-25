/**
 * Created by Agnieszka on 2016-10-19.
 */
var names = ['John','Mike','Jessica','Jane','Adam','Luke','Thomas','Brian','Julia','Jenifer'];
//0//

function displayNames(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i] + " " + i);
    }
}

//1//

//nadpisanie tablicy//

function convertUpper (array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
    return array; // Return kończy działanie funkcji //
    console.log("convertUpper");
}

//zostaje names, tworzymy nową tablicę//

function convertUpperCase(array) {
    var upperCaseNames = array;
    console.log(upperCaseNames);
    for (var i = 0; i < upperCaseNames.length; i++) {
        upperCaseNames[i] = upperCaseNames[i].toUpperCase();
    }
    return upperCaseNames;
}

//2//

function convertLower (array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
    }
    return array; // Return kończy działanie funkcji //
    console.log("convertLower");
}

//3//

function hasOnlyStrings(array) {
    for (var i = 0; i < array.length; i++) {
        if (typeof(array[i]) !== "string") { //negacja//
            console.log(array[i] + typeof(array[i]) + i + "Not a string!!!");
        }
        //linijka wolna!!//
        else {
            console.log("Every element is a string");
        }
    }
}


//4//

function checkLength(array) {
    return array.length;
}

//5//

function concateElements(array) {
    var emptyString = "";
    for (var i = 0; i < array.length; i++) {
        emptyString += array[i]; //=+ oznacza, że emptyString zachowuje poprzednią wartość w kolejnej iteracji//
    }
    return emptyString;
}


//6//

function showIndex(array) {
    for (var i = 0; i < array.length; i++) {
       array[i] = array[i] + " is number " + i;
    } return array;
}

//czy to nie jest nadpisanie array?//
//czemu nie działa?//

//displayNames(names);

//hasOnlyStrings(names);
//checkLength(names);
//concateElements(names);
//showIndex(names);//

//to upper case - obydwie funkcje nadpisują array!//
//jak zrobić, żeby hasOnlyString nie wyświetlała obydwu komend w przypadku dodania liczby do array//
