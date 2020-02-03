import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component{
    constructor(props){
        super(props);
        this.state={
            Input:''
            
        }
        
    }

    render(){
        return(
            <div>
                <input type='text' onChange={(event)=>this.setState({Input:event.target.value})} placeholder={this.props.name}></input>

            </div>
        );
    }
  
}

Input.propTypes = {
    name: PropTypes.string}

export default Input;