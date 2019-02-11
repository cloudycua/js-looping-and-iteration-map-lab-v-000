// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function lowerCaseDrivers(list) {
  return list.map(function(driver) {
    return driver.toLowerCase();
  });
}

// const drivers = [
//  'Bobby Smith',
//  'Sammy Watkins',
//  'Sally Jenkins',
//  'Annette Sawyer',
//  'Sarah Hucklebee',
//  'bobby ridge'
// ];

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
