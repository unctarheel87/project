import axios from "axios";

export default {
  getBeerList: () => {
    return axios.get('/api/beerlist');
  },
  addBeer: (beer) => {
    return axios.post('/api/beerlist', beer);
  },
  removeBeer: (id) => {
    return axios.delete(`/api/beerlist/${id}`);
  }
};