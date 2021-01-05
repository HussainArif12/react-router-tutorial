import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function CoffeeInfo({ match }) {
  const [data, setData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const fetchData = async () => {
    const fetchedData = await fetch(
      `https://api.sampleapis.com/coffee/${match.params.name}/${match.params.id}`
    );
    const jsonData = await fetchedData.json();
    setData(jsonData);
    console.log(jsonData);
    setIngredients(jsonData.ingredients);
  };
  useEffect(() => {
    fetchData();
    console.log(ingredients);
  }, []);
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>{ingredients}</p>
    </>
  );
}
export default CoffeeInfo;
