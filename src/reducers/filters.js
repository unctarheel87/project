export default (state = { sortBy: 'beer_name' }, action) => {
  switch (action.type) {
    case 'SORT_BY_BEER_NAME':
      return {
        ...state,
        sortBy: 'beer_name'
      };
    case 'SORT_BY_BREWERY_NAME':
      return {
        ...state,
        sortBy: 'brewery_name'
      };
    default:
      return state;
  }
};