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
    case "BEER_NAME_ASC":
      return {
        ...state,
        beers: state.beers.slice().sort((a, b) => {
          return a["Beer Name"] > b["Beer Name"] ? 1 : -1
        })
      }
    case "BEER_NAME_DESC":
      return {
        ...state,
        beers: state.beers.slice().sort((a, b) => {
          return a["Beer Name"] < b["Beer Name"] ? 1 : -1
        })
        }
    case "ABV_HIGH":
      return {
        ...state,
        beers: state.beers.slice().sort((a, b) => {
          return a["ABV"] > b["ABV"] ? 1 : -1
        })
      }
    case "ABV_LOW":
      return {
        ...state,
        beers: state.beers.slice().sort((a, b) => {
          return a["ABV"] < b["ABV"] ? 1 : -1
        })
      }
    default:
      return state;
  }
};