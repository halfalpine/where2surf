var wavePredictor = require('../app/js/wave-predictor');

describe('It can predict the best surf spot', function() {
  describe('It has basic fuctionality', function() {
    it('Can test for true', function() {
      expect(true).toBe(true);
    });
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
