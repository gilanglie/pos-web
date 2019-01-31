import React from 'react'
import { Link, withPrefix, navigate   } from 'gatsby'
import Odoo from 'odoo-xmlrpc'
import { Page, Toolbar, Button, Icon, Input, AlertDialog } from 'react-onsenui'; 
import Clock from 'react-live-clock';
import { IoIosTime } from 'react-icons/io';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import '../components/bootstrap.min.css' 
import '../components/style.css'
import '../components/login.css'


import Layout from '../components/layout'
import Image from '../components/image' 
import SEO from '../components/seo' 

import bg from '../images/bg.jpg';
import logo from '../images/logo.png';



class IndexPage extends React.Component {
      constructor(props){
        super(props);
        this.state = { 
          username:'',
          password:'',
  			  isAuthenticated: false,
          url:'http://pos.vardion.com',
          port: 80,
          db:'pos',
          isOpen: false
        }
      }
    async componentWillMount() {
      this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
      const userToken = await JSON.parse(localStorage.getItem("auth"));
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      
      navigate(userToken ? '/home' : '/');
    };

    login(){
      const odoo = new Odoo({
        url: this.state.url, 
        port: this.state.port,
        db: this.state.db,
        username: this.state.username,
        password: this.state.password
      }); 

      // Connect to Odoo
      odoo.connect(function (err) {
        if (err) { 
          return this.setState({
            isOpen : '1'
          }); 
          
        }
        else{
          let data = {
            username: this.state.username,
            password: this.state.password,
            url: this.state.url,
            port: this.state.port,
            db: this.state.db
          }
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("auth", 'true');          
          console.log('success')
          navigate('/home')
        }
      }.bind(this));
    }


    render () {    
      return (
        <div class="login-page">
            <div class="row">
              <div class="col-sm bg"> 
              <img src={bg}/>
              </div>
              <div class="col-sm-3 right-panel">
                <div class="header">
                  <h6>
                     <IoIosTime class="time" /> <Clock format="HH:mm:ss" ticking={true} interval={1000} />
                  </h6>
                </div> 
                <div class="body ">
                    <img src={logo} class="logo " width="50%"/>
                    <div class="form-login col-sm-8">
                      <Input
                        value={this.state.url} float
                        modifier='underbar'
                        disabled
                        style={{opacity: 1}}
                        />  
                      <br/>
                      <Input
                        value={this.state.username} float
                        onChange={(event) => { this.setState({username: event.target.value})} }
                        modifier='underbar'
                        placeholder='Username' />  
                      <br/>
                      <Input
                        value={this.state.password} float
                        onChange={(event) => { this.setState({password: event.target.value})} }
                        modifier='underbar'
                        type='password'
                        placeholder='Password' />
                      hh
                      <Button 
                      modifier="large"
                      onClick={this.login.bind(this)}
                      >
                        Login
                      </Button>
                    </div>
                </div>
              </div>
            </div>
            <AlertDialog isOpen={this.state.isOpen} >
              <div className="alert-dialog-title">Login Error!</div>
              <div className="alert-dialog-content">
                Wrong Username / Password
              </div>
              <div className="alert-dialog-footer">
                <Button onClick={() => {this.setState({isOpen: false})}} className="alert-dialog-button">
                  Ok
                </Button>
              </div>
            </AlertDialog>

        </div>
        )
    }
}

export default IndexPage
