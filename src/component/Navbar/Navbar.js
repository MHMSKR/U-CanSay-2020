import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../Button/Button.css";

import firebase from "firebase/app";

export class Navbar extends Component {
  state = {
    isSignedIn: false, // Local signed-in state.
    name: "",
    email: "",
    image: "",
    click: false,
  };

  onClick = () => {
    this.setState({
      click: !this.state.click,
    });
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) =>
      this.setState({
        isSignedIn: !!user,
        name: firebase.auth().currentUser.displayName,
        email: firebase.auth().currentUser.email,
        image: firebase.auth().currentUser.photoURL,
      })
    );
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
    this.render();
  }
  render() {
    if (this.state.isSignedIn) {
      return (
        <div>
          <nav className="nav-color">
            <div className="nav-container">
              <div className="logo">
                <Link to="/" className="logo-img">
                  U-cansay
                  <i class="fas fa-dove"></i>
                </Link>
              </div>
              <div className="menu">
                <ul className="menu-grid ">
                  <li className="link-item">
                    <Link to="/write" className="link">
                      Write
                    </Link>
                  </li>
                  <li className="link-item proimg">
                    <img
                      className="image-profile-nav "
                      id="photo"
                      src={this.state.image}
                      onClick={this.onClick}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className={this.state.click ? "profile-show" : "profile-hide"}>
            <div
              className={
                this.state.click ? "profile-container" : "fas fa-times"
              }
            >
              <i
                class="fas fa-times"
                onClick={this.onClick}
              ></i>
              <div className="profile-header">
                <img
                  src={this.state.image}
                  className="profile-img"
                  id="photo"
                />
                <h4>{this.state.name}</h4>
                <h4>{this.state.email}</h4>
              </div>
              <div className="profile-body">
                <ul className="profile-menu">
                  <Link to="/auth/newStory" onClick={this.onClick}>
                    <li className="profile-item"> New Story</li>
                  </Link>

                  <Link to="/auth/Story" onClick={this.onClick}>
                    <li className="profile-item"> Story </li>
                  </Link>

                  <li className="profile-item" onClick={this.onClick}>
                    Setting
                  </li>
                  <div
                    className="profile-item"
                    onClick={() =>
                      firebase
                        .auth()
                        .signOut()
                        .then(() => {
                          this.setState({
                            isSignedIn: false,
                          });
                        })
                    }
                  >
                    Sign Out
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        <nav className="nav-color">
          <div className="nav-container">
            <div className="logo">
              <Link to="/" className="logo-img">
                U-cansay
                <i class="fas fa-dove"></i>
              </Link>
            </div>
            <div className="menu">
              <ul className="menu-grid">
                <li className="link-item ">
                  <Link to="/write" className="link">
                    Write
                  </Link>
                </li>
                <li className="link-item ">
                  <Link to="/about" className="link">
                    Our Story
                  </Link>
                </li>
                <li className="link-item ">
                  <Link to="/sign-up" className="link">
                    Sign In
                  </Link>
                </li>
                <li className="link-item-btn">
                  <Link to="/get-start" className="Button-nav">
                    Get Start
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
