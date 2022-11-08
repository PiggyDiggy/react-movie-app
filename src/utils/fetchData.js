const baseURL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export const fetchData = async (params) => {
  const urlParams = new URLSearchParams(params);
  const response = await fetch(`${baseURL}&${urlParams}`);
  return await response.json();
};
