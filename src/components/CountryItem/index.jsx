import './styles.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

export const CountryItem = (props) => {
    
    const {image, name, capital, id} = props;


    return(
        <div className="country">
            <img className="country-photo" src={image} alt={name + "photo"} />
            
            <h1 className="country-name"> { name } </h1>
            
            <p className="country-capital"> Capital: {capital}</p>

            <Link to={ `/country/${id}`}> 
                <Button text="Travel to Country" type="primary" isDisabled={false}  />
            </Link>

        </div>
    )
}