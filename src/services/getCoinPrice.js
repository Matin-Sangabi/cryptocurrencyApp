import axios from "axios";
export function getCoinPrice(uuid) {
    console.log(uuid);
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/price`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
    headers: {
      "X-RapidAPI-Key": "d64d19c497msh80e221a4c8bfe48p19e92djsne10b78a9a4b9",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  return axios.request(options);
}
