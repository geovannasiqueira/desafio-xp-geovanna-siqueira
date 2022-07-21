const fetchStocks = async () => {
  const stocksList = [];
  const url = `https://api-desafio-xp-geovanna.herokuapp.com/stocks`;

  const response = await fetch(url);
  const result = await response.json();

  result.map(stock => stocksList.push(stock) );

  return stocksList;
};

export default fetchStocks;
