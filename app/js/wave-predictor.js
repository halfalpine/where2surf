module.exports = function(forecast) {

  const height = forecast[1].swell.components.combined.height;
  const period = forecast[1].swell.components.combined.period;
  const windDirection = forecast[1].wind.direction;
  const windSpeed = forecast[1].wind.speed;

  if (windDirection > 270 || windDirection < 90) {
    if (windSpeed < 10) {
      if (period > 6) {
        if (height >= 3) {
          return 'Rockaway Beach';
        }
      }
    }
  }

  return 'Stay home';
};
