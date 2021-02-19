const db = require('./index');
const {cityState, description} = require('./junk');

const selectCityState = () => {
  return cityState.cityState[Math.floor(Math.random() * cityState.cityState.length)];
};

function getRandomLaLoRange() {
  let laLo = [];
  // latitude range in USA is 19.50139 to 64.85694
  laLo.push(Math.random() * (64.85694 -19.50139) + 19.50139).toFixed(3) * 1;
  // longitude in USA is -161.75583 to -68.01197
  laLo.push(Math.random() * (161.75583 - 68.01197) + 68.01197).toFixed(3) * -1;
  return laLo;
}

(() =>{
  let count = 1;
  while (count <= 100) {
    let locInfo = {
      id: count,
      city: selectCityState()[0],
      state: selectCityState()[1],
      country: 'United States',
      lat: getRandomLaLoRange()[0],
      long: getRandomLaLoRange()[1],
      description: description.description
    };
    db.saveToDb(locInfo);
    count++;
  }
})();
