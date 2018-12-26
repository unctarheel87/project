export default (state =  {}, action) => {
  switch (action.type) {
    case 'SORT_BY_BREWERY_NAME':
      return {
        ...state,
        sortBy: 'brewery_name'
      };
    case 'SORT_BY_BEER_NAME':
      return {
        ...state,
        sortBy: 'beer_name'
      };
    case 'SORT_BY_ABV':
      return {
        ...state,
        sortBy: 'abv'
    };
    default:
      return state;
  }
};