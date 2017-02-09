const API_KEY = process.env.MSW_KEY;
const MSW_URL = `http://magicseaweed.com/api/${API_KEY}/forecast/?spot_id=384`;

describe('Where2Surf Homepage', function() {

  describe('Gets the forecast from MSW', function() {
    var forecastPromise;
    var promiseHelper;

    beforeEach(function() {
      var window = {};
      var fetchPromise = new Promise(function(resolve, reject) {
        promiseHelper = {
          resolve: resolve,
          reject: reject
        };
      });
      spyOn(window, 'fetch').and.returnValue(fetchPromise);
      forecastPromise = getForecast();
    });

    it('Fetches from MSW', function() {
      expect(window.fetch).toHaveBeenCalledWith(MSW_URL)
    });

    it('Returns a promise', function() {
      expect(forecastPromise).toEqual(jasmine.any(Promise));
    });
  });
});
