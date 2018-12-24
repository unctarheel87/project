export default (beers, { sortBy }) => {
  return beers.slice()
    .sort((a, b) => {
      if (sortBy === 'brewery_name') {
        return a["Brewery Name"] > b["Brewery Name"] ? 1 : -1;
      } else if (sortBy === 'beer_name') {
        return a["Beer Name"] > b["Beer Name"] ? 1 : -1;
      }
  });
};