module.exports = function(forecast) {

  const height = forecast[1].swell.components.combined.height;
  const period = forecast[1].swell.components.combined.period;
  const windDirection = forecast[1].wind.direction;
  const windSpeed = forecast[1].wind.speed;

  /*
  json[1].swell.components.combined.height
  json[1].swell.components.combined.period
  json[1].wind.direction
  json[1].condition.temperature
  json[1].condition.weather
  */

  if (windDirection > 270 || windDirection < 90) {
    if (windSpeed < 10) {
      if (period > 6) {
        if (height > 2) {
          return 'Rockaway Beach';
        }
      }
    }
  }
  console.log(height, period, windDirection, windSpeed);
  return 'Stay home';
};
