import { useParams } from "react-router";
import {useContext, useEffect, useState} from "react";
import CountriesContext from "../../../context/countriesContext";

import "./styles.css";

export const CountryDetailsPage = (props) => {
    const {id} = useParams();

    const[country, setCountry] = useState({});

    const globalState = useContext(CountriesContext);

    useEffect (() => {
        const country = globalState.countries.find(
            (country) => country.id.stringValue === id
        );
        setCountry(country);
    }, [])

    if (country){
        return (
            <div className="country-page">
                <h1 className="country-title"> {country.name?.stringValue} </h1>
            </div>
        )
    }else {
        return<p>No country with this id</p>
    }
}