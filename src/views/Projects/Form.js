import React, { Component } from 'react';
import Row from 'react-materialize/lib/Row';

import Button from 'react-materialize/lib/Button';
import InputValidator from '../../components/InputValidator/';
import { ValidatorForm } from 'react-form-validator-core';

class ProjectFrom extends Component {
    constructor(props ){
        super(props)
        this.state = {
            form: { 
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        console.log(e)
        const data = this.state.form
        
        console.log(data)
        
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
                <h1>
                    Crear Proyecto
                </h1>
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
                        errorMessages={['this field is required']}
                    />
                    <InputValidator 
                        onChange={this.handleChange} 
                        name="price" 
                        type="number" 
                        s={6} 
                        label="Precio" 
                        value={this.state.form.price? this.state.form.price: ''}/> 
                    <InputValidator 
                        onChange={this.handleChange} 
                        name="adelanto" 
                        type="number" 
                        s={6} 
                        label="Adelanto" 
                        value={this.state.form.adelanto? this.state.form.adelanto: ''}/>
                    <InputValidator 
                        onChange={this.handleChange} 
                        name="contacto" 
                        s={6} 
                        label="Contacto" 
                        value={this.state.form.contacto? this.state.form.contacto: ''}/>
                    <InputValidator 
                        onChange={this.handleChange} 
                        s={6} 
                        label="Fecha Inicio" 
                        name='start_date' 
                        type='date' 
                        value={this.state.form.start_date? this.state.form.start_date: ''}/>
                    
                    <InputValidator 
                        onChange={this.handleChange} 
                        s={6} 
                        label="Fecha Fin" 
                        name='end_date' 
                        type='date' 
                        value={this.state.form.end_date? this.state.form.end_date: ''}/> 
                    <button className="btn btn-waves " type="submit" >Crear</button> 
                    </ValidatorForm>
                </Row>
            </div>
        );
    }
}

export default ProjectFrom;