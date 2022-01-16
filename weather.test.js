const {getWeather} = require("./weather");

describe('getWeather', () => {
  it('should return the current weather as a string', () => {
    const expected = "it's sunny today";
    expect(getWeather()).toBe(expected);
  });
})
