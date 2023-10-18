import { useState, useEffect } from "react";
import { useApiData } from "../context/ApiContext";
import Card from "./Card";

function CardContainer() {
  const { apiData, didApiFail } = useApiData();
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    if (apiData && apiData.length > 0) {  // apiData is an array
      setIsLoading(false);
    }
  }, [apiData]);

  // If API fail show gif in page
  if (didApiFail) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-2xl font-bold">
          Not found
        </p>
        <img
          src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
          alt="Not found"
          className="mt-10"
        />
      </div>
    )
  }

  // If loading show text
  if (isLoading) {
    return (
      <p className="text-2xl font-bold justify-center flex items-center">
        Loading...
      </p>
    )
  }

  return (
    <div className=" flex-grow flex items-center justify-center">
      <div className="flex flex-wrap p-2">
        {apiData.map((country, index) => (
          <Card
            key={index} // Use index to set unique Key
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            capital={country.capital && country.capital[0] ? country.capital[0] : ""} // Some countries does not have Capital
            region={country.region}
            map={country.maps.googleMaps}
          />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
