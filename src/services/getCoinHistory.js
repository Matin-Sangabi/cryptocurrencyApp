import axios from "axios";
export function GetCoinHistory(id , time) {
    console.log(time);
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${id}/history`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: time },
    headers: {
      "X-RapidAPI-Key": "d64d19c497msh80e221a4c8bfe48p19e92djsne10b78a9a4b9",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  return axios.request(options);
}
