import { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

export var didApiFail = false;

export function useApiData() {
  return useContext(ApiContext);
}

export function ApiDataProvider({ children }) {
  // States
  const [apiData, setApiData] = useState([]);
  const [countryName, setCountryName] = useState("AllCountries")
  const [sortApi, setSortApi] = useState("");
  var urlApi = "";

  // Manage changes: funtions to export through the context component
  const changeCountry = (newCountry) => {
    setCountryName(newCountry);
  }
  const changeSort = (sortType) => {
    setSortApi(sortType);
  }

  // Make a request to the API and update apiData with the response
  useEffect(() => {
    didApiFail = false;

    // Verify which API is going to be used
    if(countryName == "AllCountries"){
      urlApi = "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,maps";
    } else {
      urlApi = `https://restcountries.com/v3.1/name/${countryName}`;
    }

    // Make the API request
    fetch(urlApi,requestOptions)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {    // If 404: send the info to CardContainer
            didApiFail = true;              // to show it on the page
          } else {
            throw new Error('HTTP error ' + response.status);
          }
        }
        return response.json();
      })
      .then(data => {
        if(data)
          setApiData(data);
      })
      .catch(error => console.error('Error fetching API data:', error));
  }, [countryName]);
  
  // Manage the apiData sorting
  useEffect(() => {
    switch (sortApi) {
      case "AlphaAsc":
        setApiData([...apiData.sort((a,b) => {
          const nameA = (a.name && a.name.common);
          const nameB = (b.name && b.name.common);
          return nameA.localeCompare(nameB);
        })]);
        break;
      case "AlphaDesc":
        setApiData([...apiData.sort((a,b) => {
          const nameA = (a.name && a.name.common);
          const nameB = (b.name && b.name.common);
          return nameB.localeCompare(nameA);
        })]);
        break;
      case "PopMax":
        setApiData([...apiData.sort((a,b) => b.population - a.population)]);
        break;
      case "PopMin":
        setApiData([...apiData.sort((a,b) => a.population - b.population)]);
        break;
      default:
        break;
    }
  }, [sortApi]);

  return (
    <ApiContext.Provider value={{apiData, changeCountry, didApiFail, changeSort}}>
      {children}
    </ApiContext.Provider>
  );
}