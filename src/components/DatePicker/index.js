import React from 'react';
import Input from 'react-materialize/lib/Input';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
    // this.state = {}
    // componentDidMount(){
        // const { selected } = this.props
        // // console.log(selected)
        // this.setState({
        //     value : selected
        // })
    // }
    handleChange(date,name) {
        // const other = this.state
        const selected = this.props
        console.log(date, name, selected)
        this.setState({
          [name]: date,
          value: '12-12-12' 
        });
        console.log(this.state)
      }

    render() {
        const { errorMessages, validators, requiredError, validatorListener, label,selected, name, ...rest } = this.props; 
        // console.log(this.props)
        return (
            <React.Fragment>  
                <div className="col input-field s6">
                    <DatePicker
                        {...rest } 
                        ref={(r) => { this.input = r; }}
                        value={selected}
                        selected={this.state[name]}
                        onChange={(e) => this.handleChange(e, name)} 
                    />
                    <label className="active"> {label}</label>
                    {this.errorText()}
                </div>
            </React.Fragment>
        );
    }
 
    errorText() {
        const { isValid } = this.state;
        // const { selected } = this.props;
        // this.setState({
        //     value : selected
        // })
        console.log(this.state)
        if (isValid) {
            return null;
        }
 
        return ( <React.Fragment><span style={style}>{this.getErrorMessage()}</span></React.Fragment>
        );
    }
}

export default DateValidator;