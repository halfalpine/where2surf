module.exports = function(forecast) {

  const height = forecast[1].swell.components.combined.height;
  const period = forecast[1].swell.components.combined.period;
  const windDirection = forecast[1].wind.direction;
  const windSpeed = forecast[1].wind.speed;

// Flow control for S wind
  if (windDirection > 270 || windDirection < 90) {
    if (windSpeed < 10) {
      if (period > 6 && period < 9) {
        if (height >= 3) {
          return 'Rockaway Beach';
        }
      } else if (period >= 9 && period < 11) {
        if (height >= 3 ) {
          return 'Long Beach';
        } else if (height >= 2) {
          return 'Rockaway Beach';
        }
      } else if (period >= 11) {
        if (height > 1.5 && height < 5) {
          return 'Long Beach';
        } else if (height >= 5) {
          return 'Jacob Riis';
        }
      }
    }
  }

  return 'Stay home';
};
