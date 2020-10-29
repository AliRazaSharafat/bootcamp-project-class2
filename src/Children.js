import React from 'react';
import PropsType from 'prop-types';

const Children=(props)=>{
        return(
            <div>
                <h3>
                    {props.name}
                </h3>
                <h4>
                    {props.email}
                </h4>
                <h5>
                    {props.age}
                </h5>
            </div>

        );


}
//Defaul Props
Children.defaultProps={
    name:"umair",
    email:"umairsharafat@gmail.com",
    age:19
}
Children.PropsType={
    name:PropsType.string.isRequired,
    email:PropsType.string.isRequired,
    age:PropsType.number.isRequired
}

export default Children;