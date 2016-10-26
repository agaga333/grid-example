/**
 * Created by Agnieszka on 2016-10-25.
 */

//1//
function isPopulationOver(country) {
    return country.population > 15000000;
};

var countriesPopulationOver = countries.filter(isPopulationOver);

console.table(countriesPopulationOver);

function isPopulationOverTwo(){
    var filteredCountries = [];
    for ( var i = 0; i < countries.length; i++) {
        if (countries[i].population > 15000000) {
            filteredCountries.push(countries[i]);
        }
    }
    return filteredCountries;
}

console.table(isPopulationOverTwo())

//2//

function isPopulationBetween(country) {
    return country.population > 20000000 && country.population < 50600000;
};

var countriesPopulationBetween = countries.filter(isPopulationBetween);

console.table(countriesPopulationBetween);

//3//

function isPopulationUnderAreaOver(country) {
    return country.population < 10000000 || country.area > 300000;
};

var countriesPopulationUnderAreaOver = countries.filter(isPopulationUnderAreaOver);

console.table(countriesPopulationUnderAreaOver);

//4//

function isPopulationOverAreaOver(country) {
    return country.population > 30000000 && country.area > 250000;
};

var countriesPopulationOverAreaOver = countries.filter(isPopulationOverAreaOver);

console.table(countriesPopulationOverAreaOver);

//5//

function isBorderPoland(country) {
    return country.borders.indexOf("POL") !== -1;
};

var countriesIsBorderPoland = countries.filter(isBorderPoland);

console.table(countriesIsBorderPoland);

//6//

function isBorderNeighbor(neighbor) {
    return function(country) {
        return country.borders.indexOf(neighbor) !== -1;
    };
};

var countriesIsBorderNeighbor = countries.filter(isBorderNeighbor("DEU"));

console.table(countriesIsBorderNeighbor);


//7//

function isCurrencyEuro(country) {
    return country.currencies.indexOf("EUR") !== -1;
};

var countriesIsCurrencyEuro = countries.filter(isCurrencyEuro);

console.table(countriesIsCurrencyEuro);

//8//

function isSubregionNotherEurope(country) {
    return country.subregion = "Nothern Europe";
};

var countriesIsSubregionNothernEurope = countries.filter(isSubregionNotherEurope);

console.table(countriesIsSubregionNothernEurope);

//9//

function isPopulationAndAreaOverThan(populationValue, areaValue) {
    return function(country) {
        return country.population > populationValue || country.area > areaValue;
    }
};

var countriesIsPopulationAndAreaOverThan = countries.filter(isPopulationAndAreaOverThan(40000000, 311000));

console.table(countriesIsPopulationAndAreaOverThan);

