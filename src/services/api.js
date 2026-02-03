const callToApi = async () => {
  const response = await fetch ("https://hp-api.onrender.com/api/characters");
  const data = await response.json();
  return data;
};

export default callToApi;
