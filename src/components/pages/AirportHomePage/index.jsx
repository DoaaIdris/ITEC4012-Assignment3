import "./styles.css";
import{ useEffect, useState, useContext } from 'react'
import { CountryItem } from "../../CountryItem";
import CountriesContext from "../../../context/countriesContext";


export const AirportHomePage = () => {
  const[countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const globalState = useContext(CountriesContext);

  useEffect(
    ()=> {
      getCountries();
    }, []
  ); 


  const getCountries = async()=> {
    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-doaaidris-countries/databases/(default)/documents/countries/');
      const data = await response.json();
      console.log(data);
      const formattedData = data.documents.map((item) => {
        return item.fields
      });

      console.log(formattedData);
      setCountries(formattedData);
      globalState.initializePets(formattedData);
      setLoading(false);

    }catch(err){
      console.log(err);
      setLoading(false);
    }
  }


  return (
    <div className="countries-page">
      <h1 className = "countries-title">All Countries</h1>  
      <div className="countries-container">
        {
          countries.map((country) => (
            <CountryItem key ={country.id.stringValue} image={country.image.stringValue} name={country.name.stringValue} capital={country.capital.stringValue} 
            population={country.population.stringValue} id={country.id.stringValue}></CountryItem>
          ))
        }       
        {
          loading && <p>Loading data..</p>
        }
      </div>
    </div>
  );
};