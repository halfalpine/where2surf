const wavePredictor = require('../app/js/wave-predictor');
//const data = require('./data/sample.json');
const forecastObj = function(height, period, windSpeed, windDirection) {
  const forecast = [
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
        speed: windSpeed,
        direction: windDirection
      },
      condition: {
        temperature: null,
        weather: null
      }
    }
  ];
  return forecast;
};

/*let data = [
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
*/

//const waveData = function() {};
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
  xit('has a valid data set', function() {
    expect(forecastObj).toBeDefined();
  });
  it('returns a string', function() {
    const forecast = {
      period: null,
      height: null,
      windSpeed: null,
      windDirection: null
    };
    const data = forecastObj(forecast);
    expect(wavePredictor(data)).toEqual(jasmine.any(String));
  });
});

describe('The forecasting algorithm works for forecasts with', function() {

  describe('a south wind,', function() {

    it('blowing hard', function() {
      const forecast = {
        period: null,
        height: null,
        windSpeed: 10,
        windDirection: 0
      };
      const data = forecastObj(forecast);
      expect(wavePredictor(data)).toEqual('Stay home');
    });

    describe('blowing gently,', function() {

      it('has very short-perod swell', function() {
        const forecast = {
          period: 6,
          height: null,
          windSpeed: 5,
          windDirection: 0
        };
        const data = forecastObj(forecast);
        expect(wavePredictor(data)).toEqual('Stay home');
      });

      describe('short-period swell,', function() {

        it('has small waves', function() {
          const forecast = {
            period: 7,
            height: 2,
            windSpeed: 5,
            windDirection: 0
          };
          const data = forecastObj(forecast);
          expect(wavePredictor(data)).toEqual('Stay home');
        });

        it('has medium waves', function() {
          const forecast = {
            period: 7,
            height: 3,
            windSpeed: 5,
            windDirection: 0
          };
          const data = forecastObj(forecast);
          expect(wavePredictor(data)).toEqual('Rockaway Beach');
        });

        xit('has large waves', function() {
          // expect(wavePredictor(data)).toEqual('Long Beach');
        });
      });
    });
  });

});
