export default (state, action) => {
  switch (action.type) {
    // beer data
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
        ],
        msg: "New beer succesfully added!"
      };
    case "UPDATE_BEER": 
      return {
        ...state,
        beers: state.beers.map(beer => {
          if(beer._id === action.id) {
            beer.currentDraft = action.currentDraft;
          }
          return beer
        })
      };
    case "REMOVE_BEER": 
      return {
        ...state,
        beers: state.beers.filter(beer => beer._id !== action.id),
        msg: `Beer ID ${action.id} succesfully deleted`
      };
    // beer filters
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