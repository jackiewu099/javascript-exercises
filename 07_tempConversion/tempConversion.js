const convertToCelsius = function(temp) {
  let celsius = (temp-32) / (9/5);

  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let farenheiht = (temp*1.8) +32;
  return parseFloat(farenheiht.toFixed(9/5));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
