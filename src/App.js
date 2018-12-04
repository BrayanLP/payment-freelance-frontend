import React, { Component } from 'react'; 
import './App.css'; 

// import Footer from 'react-materialize/lib/Footer';
import Navbar from 'react-materialize/lib/Navbar';
// import NavItem from 'react-materialize/lib/NavItem';
// import config from './config.json';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import { authFunctions } from './firebase';
import {auth} from './firebase/firebase';
import {
  ProjectList,
  ProjectForm,
  EditProject
}from './views/Projects/'; 
// firebase.initializeApp(config)
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeComponent from './views/Home';
import routes from './routes';


class App extends Component {
  constructor(){
    super();
    this.state = {
  
    }

  }
  signIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    authFunctions.doSignInWithGoogle(provider)
      .then(result => {
        console.log(result)
      })
      .catch(err =>{
        console.log(err)
      })
  } 

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      console.log(user.displayName)
      if(user){
        console.log(user)
        
        this.setState({
          displayName: user.displayName
        })
        // console.log(this.state)
      }
      else{
        console.log(user)
      }
    })
    
  }
  // linkProyecto(){
  //   this.props.history.push('/proyectos')
  // }
  render() {
    // const { displayName, result} = this.state 
    return (
      <div className="">   
        <Router> 
          <div>
            <Navbar brand='logo' right className="navbar" > 
              <li>
                <Link to={routes.home}>Inicio</Link>
              </li>
              <li>
                <Link to={routes.project}>Proyectos</Link>
              </li>
              {/* <li>
                <Link to={`/proyectos/crear`}>Proyectos</Link>
              </li> */}
              
            </Navbar>
            <div className="container">  
              {/* <h4>Hola: {displayName}</h4>  */}
              {/* <button onClick={this.signIn}>Iniciar sesion con Google</button> */}
              <Route exact path={routes.home} component={HomeComponent} /> 
              <Route exact path={routes.project} component={ProjectList} /> 
              <Route path={routes.createProject} component={ProjectForm} /> 
              <Route path={routes.editProject} component={EditProject} /> 
            </div>
             
          </div>
        </Router> 
      </div> 
    );
  }
}

export default App;
