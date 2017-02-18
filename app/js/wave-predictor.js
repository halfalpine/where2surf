module.exports = function(forecast) {

  const height = forecast[1].swell.components.combined.height;
  const period = forecast[1].swell.components.combined.period;
  const windDirection = forecast[1].wind.direction;
  const windSpeed = forecast[1].wind.speed;

// Flow control for S wind
  // In the MSW API, compass points are opposite (+/- 180)
  if (windDirection < 247.5 - 180 || windDirection >= 270) {
    if (windSpeed < 10) {
      if (period >= 7 && period < 9) {
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

// Flow control for W wind
  // In the MSW API, compass points are opposite (+/- 180)
  if (windDirection >= 247.5 - 180 && windDirection < 337.5 - 180) {
    if (windSpeed < 8) {
      if (period >= 7 && period < 9) {
        if (height >= 3 && height < 5) {
          return 'Rockaway Beach';
        } else if (height >= 5) {
          return 'Long Beach';
        }
      } else if (period >= 9 && period < 11) {
        if (height >= 3 && height < 5) {
          return 'Rockaway Beach';
        } else if (height >= 5) {
          return 'Long Beach';
        }
      } else if (period >= 11) {
        if (height >= 2 && height < 3) {
          return 'Rockaway Beach';
        } else if (height >= 3 && height < 5) {
          return 'Long Beach';
        } else if (height >= 5) {
          return 'Jacob Riis';
        }
      }
    } else if (windSpeed >= 8 && windSpeed < 16) {
      if (period >= 7 && period < 9) {
        if (height >= 3) {
          return 'Rockaway Beach';
        }
      } else if (period >= 9 && period < 11) {
        if (height >= 3 && height < 5) {
          return 'Rockaway Beach';
        } else if (height >= 5) {
          return 'Long Beach';
        }
      } else if (period >= 11) {
        if (height >= 2 && height < 3) {
          return 'Rockaway Beach';
        } else if (height >= 3 && height < 5) {
          return 'Long Beach';
        } else if (height >= 5) {
          return 'Jacob Riis';
        }
      }
    } else if (windSpeed >= 18 && windSpeed < 32) {
      if (period >= 7 && period < 9) {
        if (height >= 5) {
          return 'Rockaway Beach';
        }
      } else if (period >= 9 && period < 11) {
        if (height >= 3 && height < 5) {
          return 'Rockaway Beach';
        } else if (height >= 5) {
          return 'Long Beach';
        }
      } else if (period >= 11) {
        if (height >= 3 && height < 5) {
          return 'Rockaway Beach';
        } else if (height >= 5) {
          return 'Jacob Riis';
        }
      }
    }
  }

  // Flow control for N wind
    // In the MSW API, compass points are opposite (+/- 180)
    if (windDirection >= 337.5 - 180 && windDirection < 90 + 180) {
      if (period >= 13 && height >= 4) {
        return 'Democrat Point';
      } else if (period >= 7 && period < 9) {
        if (height >= 3) {
          return 'Rockaway Beach';
        }
      } else if (period >= 9 && period < 11) {
        if (height >= 2 && height < 3) {
          return 'Rockaway Beach';
        } else if (height >= 3) {
          return 'Long Beach';
        }
      } else if (period >= 11) {
        if (height >= 5) {
          return 'Jacob Riis';
        } else {
          return 'Long Beach';
        }
      }
    }

  return 'Stay home';
};
