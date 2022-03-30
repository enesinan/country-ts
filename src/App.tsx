import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Loading from "./components/Loading";
import { CountryType } from "./types";

function App() {
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getCountries = async () => {
        setLoading(true);
        try {
            const { data } = await  axios.get<CountryType[]>("https://restcountries.com/v3.1/all");
            setCountries(data);
        } catch (error) {
            console.log("errors")
        } finally{
            setLoading(false);
        }
       
    }
    useEffect(() => {
        getCountries();
       
    }, [])
   // console.table(countries)
    return (
        <div>
          <Loading loading={loading}>

        {countries.map((country) => {
            return (
                <Country country={country}></Country>
            )
        })}
          
          </Loading>
        </div>
      );
    }
    

export default App;