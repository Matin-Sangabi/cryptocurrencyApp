import axios from "axios";

export function getAllCoins(limit = 100) {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: limit,
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "d64d19c497msh80e221a4c8bfe48p19e92djsne10b78a9a4b9",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  return axios.request(options);
}
