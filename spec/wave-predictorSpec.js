const wavePredictor = require('../app/js/wave-predictor');
const apiHelper = function(period, height, direction, speed) {
  const apiObject = [
    {},
    {
      swell: {
        components: {
          combined: {
            height: height,
            period: period
          }
        }
      },
      wind: {
        speed: speed,
        direction: direction
      }
    }
  ];
  return apiObject;
};
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
});

xdescribe('Wave predictor', function() {

  describe('for south winds', function() {

    describe('blowing softly', function() {

      describe('short period', function() {

        it('has small waves', function() {

        });
      });

    });
  });
});

describe('a sample test', function() {

  it('returns a string', function() {
    const data = apiHelper(5, 10, 15, 20);
    expect(wavePredictor(data)).toEqual(jasmine.any(String));
  });

  it('uses the new format', function() {
    const data = apiHelper(5, 10, 15, 20);
    expect(wavePredictor(data)).toMatch(/Stay home/);
  });

});
