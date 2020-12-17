import React, { Component } from 'react'
import firebase from 'firebase';
import { firebaseApp } from './Base';
import FormLogin from './FormLogin';
import Admin from './Component/Admin/Admin';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status:false,
            email: null,
            displayName: null,
        }
    }
    // xác thực provider
    authenticate = provider => {
        console.log(provider);
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);
    };
    // xử lý sau khi xác thực
    authHandler = async authData => {
        const user = authData.user;
        console.log(user);
        this.setState({
            status : true,
            email: user.email,
            displayName: user.displayName
        });
    };
    logout = async () => {
        await firebase.auth().signOut();
        this.setState({status:false ,email: null, displayName: null });
    };
    render() {
        let renderUi = null;

        if(!this.state.status){
            renderUi = 
            <>
                <FormLogin loginWithface={()=>this.authenticate('Facebook')}></FormLogin>
            </>
        }else{
            renderUi =
            <> 
                <Admin logoutWithface = {()=>this.logout()}></Admin>
            </>
        }
        return (
            renderUi
        )
    };
}
