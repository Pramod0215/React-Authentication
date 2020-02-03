import React, { Component } from 'react';
import { Password, Input, Button } from '../components';

class Signin extends Component {
    render(){
        return(
            <div>
                <div>User: <Input name={"name"}/></div>
                <div>Password: <Password/></div>
                <Button ButtonName='Login'/>
            </div>
        );
    }
}
export default Signin;