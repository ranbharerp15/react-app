import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CustomInputFieldComponent } from './components/CustomInputFieldComponent';
import { CustomLabelComponent } from './components/CustomLabelComponent';
import { CustomAnchorComponent } from './components/CustomAnchorComponent';
import { CustomButtonComponent } from './components/CustomButtonComponent';

class App extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
      <div style={{display:"inline-block"}}>
        <form action= "#" method = "get" id = "signIn">
        <CustomInputFieldComponent id="username" type = "text" placeholder="Enter username" onChange = {() => console.log(event.target.value)}/>
        <CustomInputFieldComponent id="password" type = "password" placeholder="Enter username"/>
        <CustomButtonComponent type = "submit" form = "signIn" value = "Submit" />
        </form>
        <CustomLabelComponent label = "Not registered yet?"/>
        <CustomAnchorComponent link = "#" linkText = "Create Account"/>
        </div>
      </div>
    );
  }
}

export default App;
