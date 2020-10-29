import React, { Component } from 'react';
import './StyleComponent.css';
import Children from './Children';
import PropsType from 'prop-types';

class AboutClass extends Component{
    state={
        name:"Ali Raza ",
        contact: 1234567,
        email:'ali.12aliraza@gamil.com'
    };
    lastName='Sharafat';
    
    //default props
    static defaultProps={
        name:"Vladmias",
        email:'12345@gmail.com',
        age:25
    }
    //PropsType
    static PropsType={
        name:PropsType.string.isRequired,
        email:PropsType.string.isRequired,
        age:PropsType.number.isRequired
    }


    render(){
        const fullName="Ali Raza Sharafat";
        return(
            <div className='about'>
            <h5>About Class</h5>
            <h6>
                {this.state.name}
            </h6>
        <h6>{this.lastName}</h6>
            <h6>
                {this.state.contact}
            </h6>
            <h6>
                {this.state.email}
            </h6>
            <h4>
                {fullName}
            </h4>
            <Children name="Umair" age="19" email="umairsharafat@gmail.com" />
            <h1>
                {this.props.name}
            </h1>
            <h2>
                {this.props.email}
            </h2>
            <h3>
                {this.props.age}
            </h3>
            </div>

        );
    }
}

export default AboutClass;