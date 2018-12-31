import beerData from '../../../public/json/beer_list.json'

const axios = {
  get: () => {
    return Promise.resolve({
      data: beerData
    });
  },
  post: (beer) => {
    return Promise.resolve({
      data: beer
    });
  }
};

export default axios;