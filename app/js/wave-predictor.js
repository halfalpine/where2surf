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

  if (windDirection > 270 || windDirection < 90) {
    if (windSpeed < 10) {
      if (period === 7) {
        if (height >= 3) {
          return 'Rockaway Beach';
        }
      } else if (period > 7 && period ) {
    }
  }

  console.log(height, period, windDirection, windSpeed);
  return 'Stay home';
}
