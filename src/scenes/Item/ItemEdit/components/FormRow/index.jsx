import React from "react"


const FormRow = ({id, label, placeholder, onChange, ...props}) => (
    <div className="form-group">
        <label htmlFor="id">{label}</label>
        <input className="form-control" placeholder ={placeholder} onChange={e => onChange(e.target.value)}/>
    </div>
)
export default FormRow


// <FormGroup controlId={id}>
//     <Col componentClass={ControlLabel} sm={2}>{label}</Col>
//     <Col sm={10}> <FormControl placeholder={placeholder} onChange={e => onChange(e.target.value)} {...props} />
// </Col>
// </FormGroup>