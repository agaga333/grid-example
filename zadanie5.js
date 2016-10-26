/**
 * Created by Agnieszka on 2016-10-26.
 */
//1//
function countriesShort(country) {
    return country = {
        nazwa: country.name,
        populacja: country.population,
        powierzchnia: country.area,
        gestosc: country.population / country.area
    };
}

var compactCountries = countries.map(countriesShort);

console.table(compactCountries);

//2//

function getNames(country) {
    return country.name;
}

var countriesNames = countries.map(getNames);
console.log(countriesNames);

//3//

function getPopulationSum() {
    var populationSum = 0;
    for (var i = 0; len = countries.length, i < len; i++) {
        populationSum += countries[i].population //populationSum = populationSum + countries[i].population;
    };
    return populationSum;
}

console.log(getPopulationSum())

//4//

var now = new Date();
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = now.getDay();

function getWeekDay() {
    return weekDays[day];
}