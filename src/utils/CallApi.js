const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_APIKEY;
const API_HOST = process.env.REACT_APP_HOST;
export const CallApi = (url, params) => {
  const query = params ? `?${new URLSearchParams(params).toString()}` : null;
  return fetch(`${API_URL}${url}${query}`, {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  }).then((res) => res.json());
};

export const fetchGenres = () => CallApi("/genres");
export const fetchCountries = () => CallApi("/countries");
export const fetchPeople = () => CallApi("/people");
export const fetchSearch = (params) => CallApi("/search", params);
export const fetchDetails = () => CallApi("/details");
