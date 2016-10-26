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
    for (var i = 0; i < countries.length; i++) {
        populationSum = populationSum + countries[i].population;
    };
    return populationSum;
}

console.log(getPopulationSum())