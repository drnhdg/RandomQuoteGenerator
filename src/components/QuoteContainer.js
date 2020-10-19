import React from "react";
import Quote from "./Quote";
import "./QuoteContainer.css";

class QuoteContainer extends React.Component {
    render(){
        return(
            <div>
                <h1>Inspiring Random Quote Generator</h1>
                <Quote />
            </div>
        )
    }
}

export default QuoteContainer;