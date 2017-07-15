import React from 'react'

import FormGroup from "react-bootstrap/es/FormGroup"
import ControlLabel from "react-bootstrap/es/ControlLabel"
import FormControl from "react-bootstrap/es/FormControl"
import HelpBlock from "react-bootstrap/es/HelpBlock"

class FormItem extends React.Component {
    // constructor(props){
    //     super(props)
    //     // this.handleChange = this.handleChange.bind(this);
    // }
    handleChange(e){
        this.props.onValueChange(e.target.value)
    }
    render() {
        return (
            <div>
                <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                >
                    <ControlLabel>{this.props.label}</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.props.value}
                        placeholder="Enter text"
                        onChange={(e)=>this.handleChange(e)}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
            </div>
        )
    }
}

export default FormItem

