const wavePredictor = require('../app/js/wave-predictor');
const data = [
  {},
  {
    swell: {
      components: {
        combined: {
          height: null,
          period: null
        }
      }
    },
    wind: {
      speed: null,
      direction: null
    },
    condition: {
      temperature: null,
      weather: null
    }
  }
];

/*
json[1].swell.components.combined.height
json[1].swell.components.combined.period
json[1].wind.direction
json[1].condition.temperature
json[1].condition.weather
*/

describe('The wave-predictor module', function() {

  it('can test for true', function() {
    expect(true).toBe(true);
  });
  
  it('is a function', function() {
    expect(wavePredictor).toEqual(jasmine.any(Function));
  });

  it('returns a string', function() {
    expect(wavePredictor(data)).toEqual(jasmine.any(String));
  });
});
