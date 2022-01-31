import React from "react";
import "./tweet.css"

function Tweet(props){

    const style = [{
        backgroundColor:'aqua'},
        {backgroundColor:'pink'},
    ];

    const isFemale = (gender) =>{
        if(gender.toLowerCase()=='female')
            return style[1];
        else
            return style[0];
    };

    return (
        <div className="tweet" style={isFemale(props.gender)}>
            <h2> {props.fname}</h2>
            <h5>{props.gender}</h5>
            <p>{props.email}</p>
        </div>
    );
}
export default Tweet;