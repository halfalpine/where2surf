let wavePredictor = require('../app/js/wave-predictor');
let data = [
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
cjson[1].wind.direction
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
  it('has a valid data set', function() {
    expect(data).toBeDefined();
  });
  xit('returns a string', function() {
    expect()
  });
});

describe('The forecasting algorithm', function() {
  it('works for strong south wind', function() {
    data[1].wind.direction = 180;
    data[1].wind.speed = 12;
    expect(wavePredictor(data)).toEqual('Stay home.');
  });
});
