import React from "react"
import bindActionCreators from "redux/es/bindActionCreators"
import connect from "react-redux/es/connect/connect"
import {createItem} from "./action"
import Form from "react-bootstrap/es/Form"
import FormRow from "./components/FormRow/index"
import Fade from "../../animation/Fade"
import Panel from "react-bootstrap/es/Panel"
import Button from "react-bootstrap/es/Button" // ES6


class Items extends React.Component {
    constructor(props) {
        super(props)
        this.item = {}
    }


    render() {
        const item = this.item
        const isEditMode = this.props.isEditMode
        const form =
            <Fade in={isEditMode}>
                <Panel className="form">
                    <Form>
                        <FormRow id="ctrlLabel" type="text" label="Type" onChange={value => item.type = value}/>
                        <FormRow id="ctrlName" type="text" label="Name" onChange={value => item.name = value}/>
                        <FormRow id="ctrlFloor" type="text" label="Floor" onChange={value => item.floor = value}/>
                        <FormRow id="ctrlElectric" type="text" label="Electric Meter"
                                 onChange={value => item.electricMeter = value}/>
                        <Button bsStyle="primary" className="btn-block" onClick={ () => this.props.createItem(item)}>
                            Submit
                        </Button>
                    </Form>
                </Panel>
            </Fade>
        return (
            <div>
                <style type="text/css">{`
                        .form {
                            border-top: 5px solid lightgrey;
                            border-radius: 10px;
                            max-width: 500px;
                        }
                    `}</style>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({
    createItem: createItem,
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Items)