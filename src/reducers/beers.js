export default (state, action) => {
  switch (action.type) {
    case "SET_BEERS": 
      return {
        ...state,
        beers: action.beers
      };
    case "ADD_BEER": 
      return {
        ...state,
        beers: [
          ...state.beers,
          action.beer
        ]
      };
    case "REMOVE_BEER": 
      return {
        ...state,
        beers: state.beers.filter(beer => beer._id !== action.id)
      };
    default:
      return state;
  }
};