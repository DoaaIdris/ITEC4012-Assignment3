import React, {useState} from 'react';

const CountriesContext = React.createContext({
    countries: [],
    initializeCountries: () => {}
});

export const CountriesContextProvider = (props) => {
    
    const [countries, setCountries] = useState([]);

    const initializeCountries = (countriesFromApi) => {
        setCountries(countriesFromApi);
    }
    
    return (
    <CountriesContext.Provider
        value={{countries: countries, initializeCountries: initializeCountries }}>
        {props.children}
    </CountriesContext.Provider>
    )
} 

export default CountriesContext;