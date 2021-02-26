const db = require('./index');
const {cityState, description} = require('./junk');

const selectCityState = () => {
  return cityState.cityState[Math.floor(Math.random() * cityState.cityState.length)];
};

function getRandomLaLoRange() {
  let laLo = [];
  // latitude range in USA is 19.50139 to 64.85694
  let lat = (Math.random() * (64.85694 - 19.50139) + 19.50139) * 1;
  // longitude in USA is -161.75583 to -68.01197
  let long = (Math.random() * (161.75583 - 68.01197) + 68.01197) * -1;
  laLo.push(parseFloat(lat).toFixed(2));
  laLo.push(parseFloat(long).toFixed(2));
  return laLo;
}

(() =>{
  let count = 1;
  while (count <= 100) {
    let row = selectCityState();
    let locInfo = {
      id: count,
      city: row[0],
      state: row[1],
      country: 'United States',
      region: row[2],
      lat: row[3][0],
      long: row[3][1],
      description: description.description
    };
    db.saveToDb(locInfo);
    count++;
  }
})();
