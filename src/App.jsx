import { useState, useEffect } from "react";
import { fetchHotels } from "./services/services";
import Card from "./components/Card";
import NavBar from "./components/NavBar"
function App() {
  const [hotels, setHotels] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetchHotels()
      .then((data) => {
        setHotels(data);
      })
      .catch(() => setErrors("Error fetching data"));
  }, []);

  return (
    <>
      <NavBar />

      {errors && <p>{errors}</p>}

      <div className=" flex flex-col gap-16 bg-gray-200 pt-32">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="w-">
            <Card
              id={hotel.id}
              name={hotel.name}
              stars={hotel.stars}
              address={hotel.address}
              boardbases={hotel.boardbases}
              images={hotel.images}
              amenities={hotel.amenities}
            />
            
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
