module.exports = function(forecast, index) {
  let forecastObject = {};
  const { direction, speed } = forecast[index].wind;
  const { height, period } = forecast[index].swell.components.combined;
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

    function windInverter(direction){
      direction += 180;
      return direction >= 360 ? direction - 360 : direction;
    }

// Attribution: https://gist.github.com/basarat/4670200
    function getCardinal(angle) {
        //easy to customize by changing the number of directions you have
        var directions = 8;

        var degree = 360 / directions;
        angle = angle + degree/2;

        if (angle >= 0 * degree && angle < 1 * degree)
            return 'N';
        if (angle >= 1 * degree && angle < 2 * degree)
            return 'NE';
        if (angle >= 2 * degree && angle < 3 * degree)
            return 'E';
        if (angle >= 3 * degree && angle < 4 * degree)
            return 'SE';
        if (angle >= 4 * degree && angle < 5 * degree)
            return 'S';
        if (angle >= 5 * degree && angle < 6 * degree)
            return 'SW';
        if (angle >= 6 * degree && angle < 7 * degree)
            return 'W';
        if (angle >= 7 * degree && angle < 8 * degree)
            return 'NW';
        //Should never happen:
        return 'N';
    }

  forecastObject.dest = dest;
  forecastObject.direction = getCardinal(windInverter(direction));
  forecastObject.period = period;
  forecastObject.speed = speed;
  forecastObject.height = height;
  return forecastObject;
};
