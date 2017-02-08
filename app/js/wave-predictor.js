module.exports = function(forecast) {

  return 'foo'
  
  const current = forecast[1]
  if (curent.wind.direction >= 247.5 && current.wind.direction < 315) {
    return '67th St, Rockaway Beach'
  } else if (current.wind.direction >= 315 || current.wind.direction < 90) {
    return 'Long Beach'
  } else {
    return 'If the winds are low, you may go.'
  }
}
