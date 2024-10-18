const convertToCelsius = function(cTemp) {
  let convertedFTemp = (cTemp - 32) * 5/9;
  if (Number.isInteger(convertedFTemp)){
    return convertedFTemp;
  } else {
    return parseFloat(convertedFTemp.toFixed(1));
  }
  
};

const convertToFahrenheit = function(fTemp) {
  let convertedCTemp = (fTemp * (9/5)) + 32;

  if (Number.isInteger(convertedCTemp)){
    return convertedCTemp;
  } else {
    return parseFloat(convertedCTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
