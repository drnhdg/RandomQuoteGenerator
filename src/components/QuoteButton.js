import React from "react";
import "./QuoteButton.css";

const GetAnother = () => {
    //Bit nasty. I'm sure there is a better way to load it again (i.e. via hooks)
    //but I couldn't get it to work at the moment for some reason.
    //Upon reading forcing an update seems to be quite frowned upon?
    
    window.location.reload(false);
}

class QuoteButton extends React.Component {
    render(){
        return(
            <button onClick={GetAnother}>I like that, give me another</button>
        )
    }
};

export default QuoteButton;