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
json[1].wind.speed
json[1].wind.direction
json[1].condition.temperature
json[1].condition.weather
*/


describe('The wave-predictor module', function() {
    it('can test for true', function() {
      expect(true).toBe(true);
    it('is a function', function() {
      expect(typeof wave-predictor).toBe('function');
    });
    it('has a valid data set', function() {
      expect(data).toBeDefined();
    })
  });
  describe('It can acess the correct module', function() {
    const sampleData = [
      {
        foo: 'foo'
      },
      {
        wind: {
          direction: 144
        }
      }
    ];
    it('Can access sample data', function() {
      expect(sampleData).toBeTruthy(null);
    });
    it('Can use the right function', function() {
      expect(wavePredictor(sampleData)).toEqual('If the winds are low, you may go.');
    })
  })
});
