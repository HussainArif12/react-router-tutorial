import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function CoffeeInfo() {
  let params = useParams();
  const [data, setData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const fetchData = async () => {
    fetch(`https://api.sampleapis.com/coffee/${params.type}/${params.id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setIngredients(data.ingredients);
      });
  };
  useEffect(() => {
    fetchData();
    console.log(params);
    //console.log(ingredients);
  }, []);
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <p>ingredients</p>
      {ingredients.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
}
export default CoffeeInfo;
