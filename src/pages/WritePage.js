import React, { Component } from "react";
import Write from "../component/write/Write";
import firebase from "firebase/app";
import "firebase/auth";
import Login from "../component/login/Login";

export class WritePage extends Component {
  
  constructor(){
    super()
    this.state = {
    currentUser: false,
    
  };
      const User = firebase.auth().onAuthStateChanged(
      (user) => this.setState({currentUser: !!user}))
    
       console.log(this.state.currentUser)
}
   componentDidMount(){
      
   }
  


  render() {
    console.log(this.state.currentUser)

    if (!this.state.currentUser) {
      return (
        <>
          <Login />
        </>
      );
    } 
      return (
        <div>
          <Write user={this.state.currentUser}/>
          
        </div>
      )
  }
}
export default WritePage;
