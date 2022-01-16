const { getWeather } = require('./weather.js');

const greetings = (name) => {
  const weather = getWeather();
  if (typeof name === 'undefined') {
    return '';
  }
  return `Hello ${name}, ${weather}`;
}

module.exports = {
  greetings
}
