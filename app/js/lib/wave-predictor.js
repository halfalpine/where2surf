module.exports = function(forecast) {
  const { direction, speed } = forecast[1].wind;
  const { height, period } = forecast[1].swell.components.combined;
  // console.log({direction, speed, height, period});

// Flow control for S wind
  // In the MSW API, compass points are opposite (+/- 180)
  if (direction < 247.5 - 180 || direction >= 270) {
    if (speed < 10) {
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
  if (direction >= 247.5 - 180 && direction < 337.5 - 180) {
    if (speed < 8) {
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
    } else if (speed >= 8 && speed < 16) {
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
    } else if (speed >= 18 && speed < 32) {
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
    if (direction >= 337.5 - 180 && direction < 90 + 180) {
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
