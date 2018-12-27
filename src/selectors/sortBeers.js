export default (beers, { sortBy, text }) => {
  return beers.filter(beer => {
    if(sortBy === 'draft') {
      return beer.currentDraft 
    } else {
      return (
        beer["Brewery Name"].toLowerCase().includes(text.toLowerCase()) || 
        beer["Beer Name"].toLowerCase().includes(text.toLowerCase())
      )}
  }).sort((a, b) => {
      if (sortBy === 'brewery_name') {
        return a["Brewery Name"] > b["Brewery Name"] ? 1 : -1;
      } else if (sortBy === 'beer_name') {
        return a["Beer Name"] > b["Beer Name"] ? 1 : -1;
      } else if (sortBy === 'abv') {
        return a["ABV"].replace(/[^\d.-]/g, '') - b["ABV"].replace(/[^\d.-]/g, '')
      }
  });
};