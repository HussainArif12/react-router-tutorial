import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Coffee({ match }) {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://api.sampleapis.com/coffee/${match.params.name}`)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Info</h1>
      {data.map((item) => (
        <p key={item.id}>
          <Link to={`/coffee/${match.params.name}/${item.id}`}>
            {item.title}
          </Link>
        </p>
      ))}
    </>
  );
}

export default Coffee;
