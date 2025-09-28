import React, { useEffect, useState } from "react";
import { httpGet, httpPost } from "../service/carService";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const data = await httpGet("http://localhost:3000/cars");
      setCars(data);
    }
    fetchCars();
  }, []);


  return (
    <div>
      <h1>Car list</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cars.map((car) => (
          <li key={car.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <h2>{car.brand} {car.model}</h2>
            <img src={car.image} alt={`${car.brand} ${car.model}`} style={{ width: "200px" }} />
            <p>year: {car.year}</p>
            <p>km: {car.km}</p>
            <p>color: {car.color}</p>
            <p>price: ₪{car.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;