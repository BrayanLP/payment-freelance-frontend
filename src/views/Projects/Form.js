import React, { Component } from 'react';
import Row from 'react-materialize/lib/Row';

import Button from 'react-materialize/lib/Button';
import InputValidator from '../../components/Input/';
import { ValidatorForm } from 'react-form-validator-core';
import { firebase } from '../../firebase/';

import DateValidator from '../../components/DatePicker';
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import routes from '../../routes';

class ProjectFrom extends Component {
    constructor(props ){
        super(props)
        this.state = {
            form: { 
                startDate: new Date()
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit = (e) =>{
        e.preventDefault() 
        const newKey = firebase.db.ref().child('proyectos').push().key; 
        let { form } = this.state; 
        let update = {};
        console.log(form)
        // update[`/proyectos/${newKey}` ] = form;
        // firebase.db.ref().update(update);
        // return this.props.history.push(routes.project)
        
    }
    handleChange = (event, value) => {
        const { form } = this.state;
        console.log(event.target.value, event.target.name)
        form[event.target.name] = event.target.value;
        this.setState({ form })
    }
    handleChangeSelect = (date) => {
        const { form } = this.state
        form['startDate'] = date
        this.setState({form})
        // this.setState({
        //     form: {
        //     startDate: date
        //     }
        // })
    }
    componentWillMount(){
        const id = this.props.match.params.id 
        if(id){
            firebase.db.ref(`/proyectos/${id}`).on('value', (snapshot) =>{
                const data = snapshot.val()
                this.setState({
                    id: id,
                    form:  data 
                })
                console.log(this.state)
            })
        }
    }

    render() {
        const { id } = this.state
        // const { form } = this.form
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
                        value={this.state.form.name ? this.state.form.name : ''} 
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        labelClassName={id ? 'active': ''}
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
                        labelClassName={id ? 'active': ''}
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
                        labelClassName={id ? 'active': ''}
                        />
                    <InputValidator 
                        onChange={this.handleChange} 
                        name="contacto" 
                        s={6} 
                        label="Contacto" 
                        value={this.state.form.contacto? this.state.form.contacto: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        labelClassName={id ? 'active': ''}

                        /> 
                    <DateValidator
                        // {...rest }
                        // ref={(r) => { this.input = r; }}
                        name="startDate"
                        selected={this.state.form.startDate ? this.state.form.startDate : null }
                        onChange={this.handleChangeSelect}
                        label="Fecha de inicio"
                        validators={['required']}

                        errorMessages={['campo requerido']}
                        // children={
                        //     this.errorText()
                        // }
                    /> 
                    {/* <InputValidator 
                        onChange={this.handleChange} 
                        s={6} 
                        label="Fecha Inicio" 
                        name="start_date"
                        // type="date" 
                        value={this.state.form.start_date? this.state.form.start_date: ''} 
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        labelClassName={id ? 'active': ''}
                        /> */}
                    
                    {/* <InputValidator 
                        onChange={this.handleChange} 
                        s={6} 
                        label="Fecha Fin" 
                        name='end_date' 
                        type='date' 
                        value={this.state.form.end_date? this.state.form.end_date: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        labelClassName={id ? 'active': ''}
                        />  */}
                    {/* <InputValidator 
                        onChange={this.handleChange} 
                        s={6} 
                        label="Fecha Deposito" 
                        name='deposit_date' 
                        type='date' 
                        value={this.state.form.deposit_date? this.state.form.deposit_date: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        labelClassName={id ? 'active': ''}
                        /> */}
                    {/* <InputValidator 
                        onChange={this.handleChange} 
                        s={6} 
                        label="Fecha Cotización" 
                        name='cotizacion_date' 
                        type='date' 
                        value={this.state.form.cotizacion_date? this.state.form.cotizacion_date: ''}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        labelClassName={id ? 'active': ''}
                        />   */}
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