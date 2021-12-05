import { useParams } from "react-router";
import {useContext, useEffect, useState} from "react";

import "./styles.css";
import CountriesContextProvider from "../../../context/countriesContext";


export const CountryDetailsPage = (props) => {
    const {id} = useParams();

    const[country, setCountry] = useState({});

    const globalState = useContext(CountriesContextProvider);

    useEffect (() => {
        const country = globalState.countries.find(
            (country) => country.id.stringValue === id
        );
        setCountry(country);
    }, []);

    if (country){
        return (
            <div className="countries-page">
                <h1 className="countries-title"> {country.name?.stringValue} </h1>
                <img src={country.image?.stringValue} alt="details-photo" />
            </div>
        )
     }else {
         return<p>No country with this id</p>
     }


}