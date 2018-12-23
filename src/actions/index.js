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

export const beerNameAsc = () => {
  return {
    type: "BEER_NAME_ASC"
  }
}
export const beerNameDesc = () => {
  return {
    type: "BEER_NAME_DESC"
  }
}
export const abvHigh = () => {
  return {
    type: "ABV_HIGH"
  }
}
export const abvLow = () => {
  return {
    type: "ABV_LOW"
  }
}