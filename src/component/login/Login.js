import React, { Component } from 'react'
import './Login.css'
import home from '../../pages/Home'

import firebase from 'firebase/app';
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { FirebaseAuth } from 'react-firebaseui';

export class Login extends Component {
    state = {
        click: false,
        isSignedIn: false // Local signed-in state.
    };
    onClick = e => {
        this.setState({
            click: !this.state.click
        })
    }


    uiConfig = {

        sigInFlow: 'popup',

        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callback: {
            signInSuccess: () => false
        }
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({ isSignedIn: !!user })
        );
    }
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        if (!this.state.isSignedIn) {
            return ( <
                div className = { this.state.click ? 'close' : "login" } >
                <
                div className = "login-container" >
                <
                i class = 'fas fa-times'
                onClick = { this.onClick } > < /i> <
                div className = "header1" >
                <
                h6 > welcome to < /h6> <
                h1 > U - CanSay < /h1> <
                /div> <
                div className = "provider" >
                <
                StyledFirebaseAuth uiConfig = { this.uiConfig }
                firebaseAuth = { firebase.auth() }
                /> <
                /div> <
                /div> <
                /div>
            );
        }
        return ( <
            >
            <
            home / >
            <
            />
        )
    }
}

export default Login