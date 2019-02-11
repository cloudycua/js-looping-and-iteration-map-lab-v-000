// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function lowerCaseDrivers(list) {
  return list.map(function(driver) {
    return driver.toLowerCase();
  });
}

// const drivers = [ 'Bobby Smith', 'Sammy Watkins' ]
// returns [
//   { firstName: 'Bobby', lastName: 'Smith' },
//   { firstName: 'Sammy', lastName: 'Watkins' },
// ]

function nameToAttributes(list) {
  return list.map(function(driver) {
      return {
        firstName: driver.split(" ")[0],
        lastName: driver.split(" ")[1]
      };
  });
}

function attributesToPhrase(list){
  return list.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
