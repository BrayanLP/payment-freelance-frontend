import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Button, Icon, Row, Col} from 'react-materialize'
// import Col from 'react-materialize/lib/Col'
// import Row from 'react-materialize/lib/Row'
import Table from 'react-materialize/lib/Table';
// import Button from 'react-materialize/lib/Button';
import Icon from 'react-materialize/lib/Icon';
import Footer from 'react-materialize/lib/Footer';
import Navbar from 'react-materialize/lib/Navbar';
import NavItem from 'react-materialize/lib/NavItem';
import Pagination from 'react-materialize/lib/Pagination';

class App extends Component {
  render() {
    return (
      <div className="">  
        <Navbar brand='logo' right className="navbar" >
          <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
        <div className="container">
          {/* <h1>Prueba</h1> */}
          {/* <h2>Prueba</h2> */}
          {/* <h3>Prueba</h3> */}
          <h4>Prueba</h4>
          <p> Texto de Prueba para verificar que tenga una descripción</p>
          {/* <h5>Prueba</h5> */}
          {/* <h6>Prueba</h6> */}
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
