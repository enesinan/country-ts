import { FunctionComponent } from "react";
import { CountryType } from "../types";

interface ICountryProps {
    country: CountryType
}
const Country: FunctionComponent<ICountryProps> = (props) =>{
    const { country } = props;
    return (
        <p>
         {country.capital} - {country.flag}
        </p>
    
    );
};

export default Country;