import { useState, useEffect } from 'react';

const useFetch = (url) => { //custom hooks have to start with "use"
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
        fetch(url) //fetch data from our json-server
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                } 
                return res.json(); //convert json-object into javascript objects
            })
            .then(data => {
                console.log(data); //data is now an array of objects
                setData(data);
                setIsPending(false); //used to create loading message while data is being fetched
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                setError(null);
            })
     }, [url]);
    
    return {data, isPending, error}
}

export default useFetch;