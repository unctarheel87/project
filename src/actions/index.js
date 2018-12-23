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

export const remove_Beer = id => {
  return {
    type: "REMOVE_BEER",
    id
  }
}