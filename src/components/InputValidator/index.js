import React from 'react';
import Input from 'react-materialize/lib/Input';
 
import { ValidatorComponent } from 'react-form-validator-core';
class InputValidator extends ValidatorComponent {
 
    render() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
 
        return (
            <div>
                <Input
                    {...rest}
                    ref={(r) => { this.input = r; }}
                />
                {this.errorText()}
            </div>
        );
    }
 
    errorText() {
        const { isValid } = this.state;
 
        if (isValid) {
            return null;
        }
 
        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }
}

export default InputValidator;