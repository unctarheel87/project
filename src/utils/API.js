import axios from "axios";

export default {
  getBeerList: () => {
    return axios.get('/api/beerlist');
  }
};