jest.mock('./weather.js', () => ({
  getWeather: jest.fn()
}));

const { getWeather } = require('./weather.js');
const { greetings } = require('./index');


const currentWeather = 'sunny';
getWeather.mockReturnValue(currentWeather)

describe('greetings', () => {
  it('should greet Niems', () => {
    const expectedString = `Hello Niems, ${currentWeather}`;
    expect(greetings('Niems')).toBe(expectedString);
  });

  it('should return a empty string when no name is provided', () => {
    expect(greetings(undefined)).toBe('');
  });
})
