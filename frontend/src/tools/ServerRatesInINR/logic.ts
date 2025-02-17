// https://hexarate.paikama.co/api/rates/latest/USD?target=INR

import axios from "axios";

const fetchRates = async (curr: string) => {
  return await axios
    .get(`https://hexarate.paikama.co/api/rates/latest/${curr}?target=INR`)
    .then((response) => {
      return {
        rate: response.data.data.mid,
      };
    })
    .catch((error) => {
      console.log(error);
    });
};

export { fetchRates };
