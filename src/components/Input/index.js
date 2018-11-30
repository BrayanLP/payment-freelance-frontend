import React from 'react';
import Input from 'react-materialize/lib/Input';

import { ValidatorComponent } from 'react-form-validator-core';
    const style ={
        color: 'red',
        position: 'absolute',
        bottom: '-3px',
        fontWeight: 100,
        fontSize: '10px'
    }
class InputValidator extends ValidatorComponent {
 
    render() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
 
        return (
            <React.Fragment>
                <Input
                    {...rest}
                    ref={(r) => { this.input = r; }}
                    children={
                        this.errorText()
                    }
                />
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

export default InputValidator;