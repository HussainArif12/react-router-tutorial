import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Coffee() {
  let params = useParams();
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://api.sampleapis.com/coffee/${params.type}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
    console.log(params);
  }, []);

  return (
    <>
      {data.map((item) => (
        <p key={item.id}>
          <Link to={`/coffee/${params.type}/${item.id}`}>{item.title}</Link>
        </p>
      ))}
    </>
  );
}

export default Coffee;
