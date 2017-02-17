const wavePredictor = require('../app/js/wave-predictor');
const apiHelper = function({period, height, direction, speed} = {}) {
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

describe('The wave-predictor module', function() {

  it('can test for true', function() {
    expect(true).toBe(true);
  });

  it('is a function', function() {
    expect(wavePredictor).toEqual(jasmine.any(Function));
  });
});

describe('Wave predictor', function() {

  describe('for south winds', function() {

    describe('blowing softly', function() {

      it('has a very short period', function() {
        const data = apiHelper({
          period: 6,
          heght: 5,
          direction: 0,
          speed: 5
        });
        expect(wavePredictor(data)).toMatch(/Stay home/);
      });

      describe('short period', function() {

        it('has small waves', function() {
          const data = apiHelper({
            period: 7,
            height: 2,
            direction: 0,
            speed: 5
          });
          expect(wavePredictor(data)).toMatch(/Stay home/);
        });

        it('has medium waves', function() {
          const data = apiHelper({
            period: 7,
            height: 3,
            direction: 0,
            speed: 5
          });
          expect(wavePredictor(data)).toMatch(/Rockaway Beach/);
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
