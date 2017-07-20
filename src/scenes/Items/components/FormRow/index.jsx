import React from "react"
import FormGroup from "react-bootstrap/es/FormGroup"
import Col from "react-bootstrap/es/Col"
import ControlLabel from "react-bootstrap/es/ControlLabel"
import FormControl from "react-bootstrap/es/FormControl"


const FormRow = ({id, label, placeholder, onChange, ...props}) => (
    <div className="form-group">
        <label htmlFor="id">{label}</label>
        <input type="text" placeholder ={placeholder} onChange={e => onChange(e.target.value)}></input>
    </div>
)
export default FormRow


// <FormGroup controlId={id}>
//     <Col componentClass={ControlLabel} sm={2}>{label}</Col>
//     <Col sm={10}> <FormControl placeholder={placeholder} onChange={e => onChange(e.target.value)} {...props} />
// </Col>
// </FormGroup>