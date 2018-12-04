import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-materialize/lib/Row';

// import Button from 'react-materialize/lib/Button';
import InputValidator from '../../components/Input/';
import { ValidatorForm } from 'react-form-validator-core';
import { firebase } from '../../firebase/';

import { connect } from 'react-redux';

import DateValidator from '../../components/DatePicker';
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import routes from '../../routes';

class EditProject extends Component {
    constructor(props ){
        super(props)
        this.state = {
            form: { 
                name: '', 
                price: '',
                contacto: '',
                adelanto: '',
                start_date: null,
                end_date: null,
                deposit_date: null,
                cotizacion_date: null
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit = (e)=>{
        e.preventDefault() 
        // const newKey = firebase.db.ref().child('proyectos').push().key; 
        let { form, id } = this.state; 
        let update = {};
        console.log(form)
        update[`/proyectos/${id}` ] = form;
        firebase.db.ref().update(update);
        return this.props.history.push(routes.project)
        
    }
    handleChange(event, value) {
        const { form } = this.state; 
        form[event.target.name] = event.target.value;
        this.setState({ form })
    }
    handleChangeSelect = (date, name) => {
        const { form } = this.state
        form[name] = date
        this.setState({form}) 
    }
    componentWillMount(){
        const id = this.props.match.params.id 
        if(id){ 
            this.props.fetchDataId(id)
        }
    }
    componentWillReceiveProps(nextProps){ 
        const { edit } = nextProps 
        const id = nextProps.match.params.id 
        if(id && edit !== undefined) {  
            this.setState({
                form: edit,
                id: id
            }) 
        }
         
    }

    render() {
        const { id, form } = this.state 
        console.log(form)
        return (
            <div>
                <h2>
                    Editar Proyecto
                </h2>
                <Row>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit} >
                    <InputValidator 
                        onChange={this.handleChange} 
                        name="name" 
                        s={6} 
                        type="text"
                        label="Nombre proyecto" 
                        value={form.name} 
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
                        value={form.price}
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
                        value={form.adelanto}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        labelClassName={id ? 'active': ''}
                        />
                    <InputValidator  
                        onChange={this.handleChange} 
                        name="contacto" 
                        type="text"
                        s={6} 
                        label="Contacto" 
                        value={form.contacto}
                        validators={['required']}
                        errorMessages={['campo requerido']}
                        labelClassName={id ? 'active': ''}

                        /> 
                    <DateValidator
                        name="start_date"
                        selected={form.start_date}
                        onChange={(e) => this.handleChangeSelect(e, 'start_date')} 
                        value={form.start_date }
                        label="Fecha de inicio"
                        validators={['required']}
                        errorMessages={['campo requerido']} 
                        // defaultValue={null}
                    /> 
                    <DateValidator
                        name="end_date"
                        selected={form.end_date }
                        onChange={(e) => this.handleChangeSelect(e, 'end_date')} 
                        value={form.end_date }
                        label="Fecha Fin"
                        validators={['required']}
                        errorMessages={['campo requerido']} 
                    /> 
                    <DateValidator
                        name="deposit_date"
                        selected={form.deposit_date }
                        onChange={(e) => this.handleChangeSelect(e, 'deposit_date')} 
                        value={form.deposit_date }
                        label="Fecha Deposito"
                        validators={['required']}
                        errorMessages={['campo requerido']} 
                    /> 
                    <DateValidator
                        name="cotizacion_date"
                        selected={form.cotizacion_date }
                        onChange={(e) => this.handleChangeSelect(e, 'cotizacion_date')} 
                        value={form.cotizacion_date }
                        label="Fecha Cotización"
                        validators={['required']}
                        errorMessages={['campo requerido']} 
                    />

                    <div className="col input-field s6">
                        <button className="btn btn-waves " type="submit" >Actualizar</button> 
                    </div>
                    </ValidatorForm>
                </Row>
            </div>
        );
    }
}


const mapState = state => ({ 
    edit: state.projectModel.editProject
  });
  
  // const mapDispatch = dispatch => ({
  //   addByOne: () => dispatch.virtualModel.addBy(1)
  // });
  
  const mapDispatch = ({
    projectModel: { fetchDataId }
  }) => ({
    fetchDataId: (id) => fetchDataId(id), 
  });
  
  EditProject.propTypes = {
    editProject: PropTypes.array, 
  };
  export default 
    connect(
      mapState,
      mapDispatch
    )(EditProject);
   

// export default EditProject;