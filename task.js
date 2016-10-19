/**
 * Created by Agnieszka on 2016-10-19.
 */
var names = ['John','Mike','Jessica','Jane','Adam','Luke','Thomas','Brian','Julia','Jenifer'];
//1//

function displayNames(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i] + " " + i);
    }
}

//2//

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


//4//

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


//5//

function checkLength(array) {
    return array.length;
}

//6//

function concateElements(array) {
    var emptyString = "";
    for (var i = 0; i < array.length; i++) {
        emptyString =+ array[i]; //=+ oznacza, że emptyString zachowuje poprzednią wartość w kolejnej iteracji//
    }
    return emptyString;
}

//7//

function showIndex(array) {
    for (var i = 0; i < array.length; i++) {
       array[i] = array[i] + " is number " + i;
    }
}

//displayNames(names);//
convertUpperCase(names);
//hasOnlyStrings(names);//
checkLength(names);
concateElements(names);
