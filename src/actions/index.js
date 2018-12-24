export const setBeers = beers => {
  return {
    type: "SET_BEERS",
    beers
  }
}

export const add_Beer = beer => {
  return {
    type: "ADD_BEER",
    beer
  }
}

export const update_Beer = (id, currentDraft) => {
  return {
    type: "UPDATE_BEER",
    id,
    currentDraft
  }
}

export const remove_Beer = id => {
  return {
    type: "REMOVE_BEER",
    id
  }
}

export const sortByBeerName = () => {
  return {
    type: "SORT_BY_BEER_NAME"
  }
}
export const sortByBreweryName = () => {
  return {
    type: "SORT_BY_BREWERY_NAME"
  }
}
