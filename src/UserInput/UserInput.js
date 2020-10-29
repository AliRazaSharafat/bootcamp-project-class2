import React from 'react';

const userInput=(props)=>{
    const   Styling={
      border:'2px solid red'  
    };
    return(
        <div >
            <input style={Styling} type='text' onClick={props.changed} />
        </div>
    ) 
}

export default userInput;