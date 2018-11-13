import React, { Component } from 'react'; 
import './App.css'; 
import Table from 'react-materialize/lib/Table'; 
import Icon from 'react-materialize/lib/Icon';
import Footer from 'react-materialize/lib/Footer';
import Navbar from 'react-materialize/lib/Navbar';
import NavItem from 'react-materialize/lib/NavItem';
import Pagination from 'react-materialize/lib/Pagination';
// import config from './config.json';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import { authFunctions } from './firebase';
import {auth} from './firebase/firebase';
// firebase.initializeApp(config)

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
  componentWillMount(){
    console.log("entre al Will") 
    auth.onAuthStateChanged(user => {
      console.log(user.displayName)
      
      this.setState({
        displayName: user.displayName
      })
      console.log(this.state)
    })
  }
  render() {
    const { displayName} = this.state
    console.log(this.state)
    return (
      <div className="">  
        <Navbar brand='logo' right className="navbar" >
          <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
        <div className="container"> 
        {/* {console.log(this.state)} */}
          <h4>Hola: {displayName}</h4>
          <p> Texto de Prueba para verificar que tenga una descripción</p> 
          <button onClick={this.signIn}>Iniciar sesion con Google</button>
          <Table striped={true}>
            <thead>
              <tr>
                <th data-field="id">#</th>
                <th data-field="nombre">Nombre</th>
                <th data-field="deuda">Deuda</th>
                <th data-field="acciones">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alvin</td>
                <td>s/. 50</td>
                <td>
                <Icon>visibility</Icon>
                <Icon>create</Icon>
                <Icon>delete</Icon>
                </td>
              </tr>
            </tbody>
          </Table>
          <Pagination items={10} activePage={2} maxButtons={8} />
        </div>
        <Footer copyrights="copy 2015 Copyright Text"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          }
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          }
          className='example'
        >
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
      </div>
    );
  }
}

export default App;
