<<<<<<< HEAD
function lowerCaseDrivers(list) {
  return list.map(function(driver) {
    return driver.toLowerCase();
  });
}

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
=======
function lowerCaseDrivers(drivers) {
  map(drivers, function(driver)) {
    driver.toLowerCase();
  }
>>>>>>> c39900538bf05542950e00b8c7b87851836194ee
}
