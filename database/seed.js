const db = require('./index');

const cityState = [['New York City', 'New York'], ['Los Angeles', 'California'], ['Chicago', 'Illinois'], ['Houston', 'Texas'], ['Phoenix', 'Arizona'], ['Philadelphia', 'Pennsylvania'], ['San Antonio', 'Texas'], ['San Diego', 'California'], ['Baltimore', 'Maryland'], ['South Lake Tahoe', 'California'], ['Portland', 'Oregon'], ['Las Vegas', 'Nevada'], ['Atlanta', 'Georgia'], ['Tampa', 'Florida'], ['Miami', 'Florida'], ['Detroit', 'Michigan'], ['Nashville', 'Tennessee'], ['Seattle', 'Washington'], ['Charlotte', 'North Carolina'], ['Boston', 'Massachusetts'], ['Denver', 'Colorado'], ['Seattle', 'Washington'], ['Columbus', 'Ohio'], ['New Orleans', 'Louisiana'], ['Charleston', 'South Carolina'], ['Santa Fe', 'New Mexico'], ['Savannah', 'Georgia'], ['Honolulu', 'Hawaii'], ['Williamsburg', 'Virginia'], ['San Francisco', 'California'], ['St. Louis', 'Missouri'], ['Branson', 'Missouri'], ['Savannah', 'Georgia'], ['Indianapolis', 'Indiana']];

const selectCityState = () => {
  return cityState[Math.floor(Math.random() * cityState.length)];
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
      description: 'This is the house location'
    };
    db.saveToDb(locInfo);
    count++;
  }
})();
