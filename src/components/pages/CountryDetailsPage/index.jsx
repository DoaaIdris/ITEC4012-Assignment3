import { useParams } from "react-router";
import {useContext, useEffect, useState} from "react";

import "./styles.css";
import CountriesContext from "../../../context/countriesContext";


export const CountryDetailsPage = (props) => {
    const {id} = useParams();

    const[country, setCountry] = useState({});

    const globalState = useContext(CountriesContext);

    useEffect (() => {
        const country = globalState.countries.find(
            (country) => country.id.stringValue === id
        );
        setCountry(country);
    }, []);

    if (country){
        return (
            <div className="countries-page">

            <h1 className="countries-title">About {country.name?.stringValue} </h1>

                <div class="grid-container">
                    <div class="item1">                
                        <img src= {country.flag?.stringValue} alt="flag-photo" />
                    </div>
                    <div class="item2">  
                        <img src={country.image?.stringValue} alt="country-photo" />
                    </div>  
                    <div class="item3">                
                        <img src={country.map?.stringValue} alt="map-photo" />
                    </div>
                </div>
                <p className="facts-title">Facts about {country.name?.stringValue}: </p>
                <ul>
                    <li><b>Official Name:</b> {country.officialName?.stringValue}  </li>
                    <li><b>Capital City:</b> {country.capital?.stringValue}</li>
                    <li><b>Population:</b> {country.population?.stringValue}</li>
                    <li><b>Area:</b> {country.area?.stringValue}</li>
                    <li><b>Language:</b> {country.language?.stringValue}</li>
                    <li><b>Government:</b> {country.government?.stringValue}</li>
                    <li><b>Currency:</b> {country.currency?.stringValue}</li>
                </ul>
                    
                

                
              
            </div>
        )
     }else {
         return<p>No country with this id</p>
     }


}