module.exports = function(forecast) {

  const current = forecast[1];

  /*
  json[1].swell.components.combined.height
  json[1].swell.components.combined.period
  json[1].wind.direction
  json[1].condition.temperature
  json[1].condition.weather
  */
  console.log(current.wind.direction, current.wind.speed);

  if (current.wind.direction > 270 || current.wind.direction < 90) {
    if (current.wind.speed >= 10) {
      return 'Stay home';
    }
  }

  return 'foo';
}
