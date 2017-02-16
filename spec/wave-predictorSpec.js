const wavePredictor = require('../app/js/wave-predictor');
//const data = require('./data/sample.json');
const data = function(height = 0, period = 0, windDirection = 0, windSpeed = 0) {
  const forecastObj = [
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
  return forecastObj;
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

/*
var {
prop: x,
prop2: {
prop2: {
nested: [ , , b]
}
}
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}};
console.log(x, b);
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
  it('has a valid data set', function() {
    expect(data).toBeDefined();
  });
  it('returns a string', function() {
    expect(wavePredictor(data)).toEqual(jasmine.any(String));
  });
});

xdescribe('The forecasting algorithm works for forecasts with', function() {

  describe('a south wind,', function() {
    data[1].wind.direction = 0;

    it('blowing hard', function() {
      data[1].wind.speed = 10;
      expect(wavePredictor(data)).toEqual('Stay home');
    });

    describe('blowing gently,', function() {
      data[1].wind.speed = 5;

      it('has very short-perod swell', function() {
        data[1].swell.components.combined.period = 6;
        expect(wavePredictor(data)).toEqual('Stay home');
      });

      describe('short-period swell,', function() {
        data[1].swell.components.combined.period = 7;

        it('has small waves', function() {
          data[1].swell.components.combined.height = 2;
          expect(wavePredictor(data)).toEqual('Stay home');
        });

        it('has medium waves', function() {
          data[1].swell.components.combined.height = 3;
          expect(wavePredictor(data)).toEqual('Rockaway Beach');
        });

        xit('has large waves', function() {
          data[1].swell.components.combined.height = 5;
          expect(wavePredictor(data)).toEqual('Long Beach');
        });
      });
    });
  });

});
