import React from "react";
import { useFetch } from "../hooks";
import QuoteButton from "./QuoteButton";
import "./Quote.css";

 //Simple for demo purposes. In a real app would have error handling (no data) etc.

function Quote() {
    const url = "https://programming-quotes-api.herokuapp.com/quotes/random/lang/en";
    const [data, loading] = useFetch(url);
    return(
        <>
        {loading ? (
            <div className="loading"></div>
        ) : (
            <div>
               {data.map(({ id, en, author }) => (
                   <div key={id}>
                <p className="quote">{en}</p>
                <span className="author">{author}</span>
                </div>
            ))}       
            <QuoteButton />  
                </div>
        )}
         
        </>
    )
    
}

export default Quote;