import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = (props) => {
    const [appState, setAppState] = useState();
  
    useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
        axios.get(apiUrl).then((response) => {
            const allData = response.data;
            setAppState(allData);
            console.log(allData)
        }).catch((error) => {
            console.log(error)
        });
    }, [setAppState]);
    return (
            <>
               +
            </>
    )
}
export default Main;
