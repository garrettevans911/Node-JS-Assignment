exports.weather = function () {
  return Weather();
  {
};

exports.currentTemp = function() {
  const t = new Temperature();
  let Temp = t.Temp();
  return Temp();
  "Temp":90.5,
}

exports.currentUnit = function() {
  const u = new Unit();
  let Unit = u.Unit();
  return Unit();
  "Unit":"Fahrenheit",
}

exports.currentCloudy = function() {
  const c = new Cloudy();
  let Cloudy = c.Cloudy();
  return Cloudy();
  "Cloudy":false,
}

exports.currentPrecipitationChance = function() {
  const p = new Precipitation();
  let Precipitation = p.Precipitation();
  return Rain();
  "PrecipitationChance":0
}

