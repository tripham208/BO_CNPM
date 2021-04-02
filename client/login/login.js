import React, { Component } from 'react';
import loginImg from "../../login.svg";

export class Login extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg}/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">UserName</label>
                            <input type="text" name="username" placeholder="UserName"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">PassWord</label>
                            <input type="password" name="password" placeholder="PassWord"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Login
                    </button>
                </div>
            </div>
        )

    }
}