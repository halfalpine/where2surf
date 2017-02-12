var JasmineConsoleReporter = require('jasmine-console-reporter');
var reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});

module.exports = function(forecast) {

  const current = forecast[1]

  if (curent.wind.direction >= 247.5 && current.wind.direction < 315) {
    return '67th St, Rockaway Beach'
  } else if (current.wind.direction >= 315 || current.wind.direction < 90) {
    return 'Long Beach'
  } else {
    return 'If the winds are low, you may go.'
  }
}
