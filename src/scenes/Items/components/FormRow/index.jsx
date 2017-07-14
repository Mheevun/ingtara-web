import React from "react"
import FormGroup from "react-bootstrap/es/FormGroup"
import Col from "react-bootstrap/es/Col"
import ControlLabel from "react-bootstrap/es/ControlLabel"
import FormControl from "react-bootstrap/es/FormControl"


const FormRow = (props) => (
    <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
            {props.label}
        </Col>
        <Col sm={10}>
            <FormControl placeholder={props.placeHolder} onChange={e => props.onChange(e.target.value)}/>
        </Col>
    </FormGroup>
)
export default FormRow