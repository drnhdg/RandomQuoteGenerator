import {useState, useEffect} from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        //In a real app would probably use something like Axios to bring back the data.
        async function fetchUrl() {
            const response = await fetch(url);
            const json = await response.json();
    
            setData([json]);
            setLoading(false);
        }
    
        fetchUrl();   
    }, []);

    return [data, loading];
}
export {useFetch};