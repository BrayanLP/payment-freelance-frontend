import React from 'react';
// import Input from 'react-materialize/lib/Input';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css';
import { ValidatorComponent } from 'react-form-validator-core';
    const style ={
        color: 'red',
        position: 'absolute',
        bottom: '-3px',
        fontWeight: 100,
        fontSize: '10px',
        left: '0'
    }
class DateValidator extends ValidatorComponent {
 
    handleChange(date,name) { 
        this.setState({
          [name]: date 
        });
        // console.log(this.state)
    } 

    render() {
        const { errorMessages, validators, requiredError, validatorListener, value, selected, label, name, ...rest } = this.props; 
        // console.log(this.props) 
        return (
            <React.Fragment>  
                <div className="col input-field s6">
                    <DatePicker
                        {...rest } 
                        // ref={(r) => { this.input = r; }}
                        // value={selected}
                        selected={selected}
                        // onChange={(e) => this.handleChange(e, name)} 
                    />
                    <label className="active"> {label}</label>
                    {this.errorText()}
                </div>
            </React.Fragment>
        );
    }
 
    errorText() {
        const { isValid } = this.state; 
        if (isValid) {
            return null;
        }
 
        return ( <React.Fragment><span style={style}>{this.getErrorMessage()}</span></React.Fragment>
        );
    }
}

export default DateValidator;