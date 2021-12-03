import './styles.css';
import { Link } from 'react-router-dom';


export const CountryItem = (props) => {
    
    const {image, name, capital, population , id } = props;


    return(
        <div className="country">
            <img className="country-photo" src={image} alt={name + "photo"} />

            <Link to={ `/country/${id}`}> 
                <h1 className="country-name"> { name } </h1>
            </Link>

            <p className="country-capital"> Capital: {capital}</p>
            <p className="country-population"> Population: {population}</p>

        </div>
    )
}