import React, {createContext, useEffect,  useState} from "react";
import axios from "axios";

export const NewContext = createContext();

export const NewContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "ae56f414e43944679bb7ccd856953757";

    useEffect(() => {
        axios
          .get(

            
            
            `https://newsapi.org/v2/top-headlines/?country=co&category=health&pagesize=6&apiKey=${apiKey}`
          )
          .then((response) => setData(response.data))
          .catch((error) => console.log(error));
      }, []);

    return(
        <NewContext.Provider value={{ data }}>
            {props.children}
        </NewContext.Provider>
    )

}
