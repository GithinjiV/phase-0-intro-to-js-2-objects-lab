const employee = {
    name: "Vincent",
    streetAddress: "Sandy Park Esate"
  };
  
  function updateEmployeeWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(driver, key, value) {
    driver[key] = value;
  
    return driver;
  }
  
  function deleteFromEmployeeByKey(driver, key) {
    const newObj = Object.assign({}, driver);
  
    delete newObj[key];
  
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(driver, key) {
    delete driver[key];
  
    return driver;
  }