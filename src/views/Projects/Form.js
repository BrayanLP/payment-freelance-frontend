import React, { Component } from 'react';
import Row from 'react-materialize/lib/Row';

import Button from 'react-materialize/lib/Button';
import InputValidator from '../../components/Input/';
import { ValidatorForm } from 'react-form-validator-core';
import { firebase } from '../../firebase/';
class ProjectFrom extends Component {
    constructor(props ){
        super(props)
        this.state = {
            form: { 
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit = (e) =>{
        e.preventDefault() 
        const newKey = firebase.db.ref().child('proyectos').push().key; 
        let { form } = this.state; 
        let update = {};
        update[`/proyectos/${newKey}` ] = form;
        firebase.db.ref().update(update);
        return this.props.history.push('/proyectos')
        
    }
    handleChange = (event, value) => {
        const { form } = this.state;
        console.log(event.target.value, event.target.name)
        form[event.target.name] = event.target.value;
        this.setState({ form })
    }
    render() {

        return (
            <div>
                <h2>
                    Crear Proyecto
                </h2>
                <Row>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit} >
                    <InputValidator 
                        onChange={this.handleChange} 
                        name="name" 
                        s={6} 
                        label="Nombre proyecto" 
                        value={this.state.form.name? this.state.form.name: ''} 
                        validators={['required']}
                        errorMessages={['campo requerido']}
                    />
                    <InputValidator 
                        onChange={this.handleChange} 
                        name="price" 
                        type="number" 
                        s={6} 
                        label="Precio Total" 
                        value={this.state.form.price? this.state.form.price: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        /> 
                        
                    <InputValidator 
                        onChange={this.handleChange} 
                        name="adelanto" 
                        type="number" 
                        s={6} 
                        label="Adelanto" 
                        value={this.state.form.adelanto? this.state.form.adelanto: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        />
                    <InputValidator 
                        onChange={this.handleChange} 
                        name="contacto" 
                        s={6} 
                        label="Contacto" 
                        value={this.state.form.contacto? this.state.form.contacto: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        />
                    <InputValidator 
                        onChange={this.handleChange} 
                        s={6} 
                        label="Fecha Inicio" 
                        name='start_date' 
                        type='date' 
                        value={this.state.form.start_date? this.state.form.start_date: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        />
                    
                    <InputValidator 
                        onChange={this.handleChange} 
                        s={6} 
                        label="Fecha Fin" 
                        name='end_date' 
                        type='date' 
                        value={this.state.form.end_date? this.state.form.end_date: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        /> 
                    <InputValidator 
                        onChange={this.handleChange} 
                        s={6} 
                        label="Fecha Deposito" 
                        name='deposit_date' 
                        type='date' 
                        value={this.state.form.deposit_date? this.state.form.deposit_date: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        />
                    <InputValidator 
                        onChange={this.handleChange} 
                        s={6} 
                        label="Fecha Cotización" 
                        name='cotizacion_date' 
                        type='date' 
                        value={this.state.form.cotizacion_date? this.state.form.cotizacion_date: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        />  
                    <div className="col input-field s6">
                        <button className="btn btn-waves " type="submit" >Crear</button> 
                    </div>
                    </ValidatorForm>
                </Row>
            </div>
        );
    }
}

export default ProjectFrom;