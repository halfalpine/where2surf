module.exports = function(forecast) {

  const current = forecast[1];

  const height = current.swell.components.combined.height;
  const period = current.swell.components.combined.period;
  const windDirection = current.wind.direction;
  const windSpeed = current.wind.speed;

  /*
  json[1].swell.components.combined.height
  json[1].swell.components.combined.period
  json[1].wind.direction
  json[1].condition.temperature
  json[1].condition.weather
  */

  if (current.wind.direction > 270 || current.wind.direction < 90) {
    if (current.wind.speed >= 10) {
      return 'Stay home';
    } else {
      if (current.swell.components.combined.period <= 7) {
        if (current.swell.components.combined.height < 2
        && curren.swell.component) {
          return null;
        }
      }
    }
  }

  return 'foo';
}
