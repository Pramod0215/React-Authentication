
import React, { Component } from 'react';



class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password1:'',
            password2:'',
        }
    }
    render(){
        return(
            <div>
                <div>
                    UserName: <input type="text" onChange={(event)=>this.setState({username:event.target.value})}/>
                    Email: <input type="email" onChange={(event)=>this.setState({email:event.target.value})}/>
                    Password : <input type="password" onChange={(event)=>this.setState({password1:event.target.value})}/>
                    Confirm Password: <input type="password" onChange={(event)=>this.setState({password2:event.target.value})}/>

                </div>
            </div>
        )
    }
}

export default Signup;