export default (state, action) => {
  switch (action.type) {
    case "SET_BEERS": 
    return {
      ...state,
      beers: action.beers
    };

    default:
    return state;
  }
};