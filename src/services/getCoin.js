import axios from "axios";
export function GetOneCoin(id) {
  // console.log(id);
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
    headers: {
      "X-RapidAPI-Key": "d64d19c497msh80e221a4c8bfe48p19e92djsne10b78a9a4b9",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
   return axios.request(options)
}
// eth = razxDUgYGNAdQ
//btc = Qwsogvtv82FCd
