const wavePredictor = require('../app/js/wave-predictor');

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

  xit('returns a string', function() {
    expect(wavePredictor(data)).toEqual(jasmine.any(String));
  });
});

describe('Wave predictor', function() {
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
      }
    }
  ];

  describe('for south winds', function() {
    data[1].wind.direction = 0;

    it('sets variables', function() {
      expect(data[1].wind.direction).toEqual(0);
    });

    it('works with high winds', function() {
      data[1].wind.speed = 10;
      expect(data[1].wind.speed).toEqual(10);
      expect(wavePredictor(data)).toMatch(/Stay home/);
    });

    describe('blowing softly', function() {

      it('renames the variable correctly', function() {
        data[1].wind.speed = 5;
        expect(data[1].wind.speed).toEqual(5);
      });
    });
  });
});
