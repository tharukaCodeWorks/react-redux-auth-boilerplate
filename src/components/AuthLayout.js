import React from 'react';
import './AuthLayout.css';
import authSvg from '../images/auth-svg.svg';

const AuthLayout = (props) =>{
    return(
        <div className="auth">

            <div className="auth-left">
                <p className="slug">Avian<br /> Admin Panel</p>
                <img src={authSvg} style={{width:"55%"}}/>
                <p className="credit">All Rights Reserved &#169; <a href="#" target="blank" className="teachmeit-link">Avian</a> 2021 | <a href="#" target="blank">Privacy Policy</a> | <a href="#" target="blank">Terms & Conditions</a></p>
            </div>

            <div className="auth-right">
                {props.children}
            </div>
        </div>
    );
}

export default AuthLayout;