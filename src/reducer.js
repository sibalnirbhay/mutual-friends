module.exports = function reducer (groupedObj) {
  for (let pair in groupedObj) {
    let first = groupedObj[pair][0];
    let second = groupedObj[pair][1];

    groupedObj[pair] = first.filter(user => second.includes(user));
  }
}
