import React from 'react';
import '../App.css';

const userOutput=(props)=>{
    
    return(
        <div className="userOutput">
            <p>My name is {props.userName}</p>
            <p>Some random text</p>
        </div>

    )

}

export default userOutput;