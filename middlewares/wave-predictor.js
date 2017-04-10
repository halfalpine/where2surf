module.exports = function(forecast) {
  let forecastObject = {};
  const { direction, speed } = forecast[1].wind;
  const { height, period } = forecast[1].swell.components.combined;
  // console.log({direction, speed, height, period});
  let dest = 'Stay home';

// Flow control for S wind
  // In the MSW API, compass points are opposite (+/- 180)
  if (direction < 247.5 - 180 || direction >= 270) {
    if (speed < 10) {
      if (period >= 7 && period < 9) {
        if (height >= 3) {
          dest = 'Rockaway Beach';
        }
      } else if (period >= 9 && period < 11) {
        if (height >= 3 ) {
          dest = 'Long Beach';
        } else if (height >= 2) {
          dest = 'Rockaway Beach';
        }
      } else if (period >= 11) {
        if (height > 1.5 && height < 5) {
          dest = 'Long Beach';
        } else if (height >= 5) {
          dest = 'Jacob Riis';
        }
      }
    }
  }

// Flow control for W wind
  // In the MSW API, compass points are opposite (+/- 180)
  if (direction >= 247.5 - 180 && direction < 337.5 - 180) {
    if (speed < 8) {
      if (period >= 7 && period < 9) {
        if (height >= 3 && height < 5) {
          dest = 'Rockaway Beach';
        } else if (height >= 5) {
          dest = 'Long Beach';
        }
      } else if (period >= 9 && period < 11) {
        if (height >= 3 && height < 5) {
          dest = 'Rockaway Beach';
        } else if (height >= 5) {
          dest = 'Long Beach';
        }
      } else if (period >= 11) {
        if (height >= 2 && height < 3) {
          dest = 'Rockaway Beach';
        } else if (height >= 3 && height < 5) {
          dest = 'Long Beach';
        } else if (height >= 5) {
          dest = 'Jacob Riis';
        }
      }
    } else if (speed >= 8 && speed < 16) {
      if (period >= 7 && period < 9) {
        if (height >= 3) {
          dest = 'Rockaway Beach';
        }
      } else if (period >= 9 && period < 11) {
        if (height >= 3 && height < 5) {
          dest = 'Rockaway Beach';
        } else if (height >= 5) {
          dest = 'Long Beach';
        }
      } else if (period >= 11) {
        if (height >= 2 && height < 3) {
          dest = 'Rockaway Beach';
        } else if (height >= 3 && height < 5) {
          dest = 'Long Beach';
        } else if (height >= 5) {
          dest = 'Jacob Riis';
        }
      }
    } else if (speed >= 18 && speed < 32) {
      if (period >= 7 && period < 9) {
        if (height >= 5) {
          dest = 'Rockaway Beach';
        }
      } else if (period >= 9 && period < 11) {
        if (height >= 3 && height < 5) {
          dest = 'Rockaway Beach';
        } else if (height >= 5) {
          dest = 'Long Beach';
        }
      } else if (period >= 11) {
        if (height >= 3 && height < 5) {
          dest = 'Rockaway Beach';
        } else if (height >= 5) {
          dest = 'Jacob Riis';
        }
      }
    }
  }

  // Flow control for N wind
    // In the MSW API, compass points are opposite (+/- 180)
    if (direction >= 337.5 - 180 && direction < 90 + 180) {
      if (period >= 13 && height >= 4) {
        dest = 'Democrat Point';
      } else if (period >= 7 && period < 9) {
        if (height >= 3) {
          dest = 'Rockaway Beach';
        }
      } else if (period >= 9 && period < 11) {
        if (height >= 2 && height < 3) {
          dest = 'Rockaway Beach';
        } else if (height >= 3) {
          dest = 'Long Beach';
        }
      } else if (period >= 11) {
        if (height >= 5) {
          dest = 'Jacob Riis';
        } else {
          dest = 'Long Beach';
        }
      }
    }

  forecastObject.dest = dest;
  forecastObject.direction = direction;
  forecastObject.period = period;
  forecastObject.speed = speed;
  forecastObject.height = height;
  return forecastObject;
};
