import axios from "axios";

export function getExample() {
  const options = {
    method: "GET",
    url: "https://api.wallex.ir/v1/markets",
    headers: {
      "X-API-Key": "2755|mLnHCg3HLXp5zBKaw7YZmp3D80ryZQfr5cmvc4rs",
    },
  };
  return axios.request(options);
}
