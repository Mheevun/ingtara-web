import React from "react"
import bindActionCreators from "redux/es/bindActionCreators"
import connect from "react-redux/es/connect/connect"
import {createItemContract} from "./action"
import Button from "react-bootstrap/es/Button"
import Form from "react-bootstrap/es/Form"
import FormRow from "./components/FormRow/index"
import Fade from "../../animation/Fade"
import FormGroup from "react-bootstrap/es/FormGroup"; // ES6


class Items extends React.Component {
    constructor(props) {
        super(props)
        this.item = {}
        this.state = {
            isEditMode: false
        }
    }

    toggleForm() {
        this.setState({isEditMode: !this.state.isEditMode})
    }

    render() {
        const item = this.item
        const formStyle = {
            width: '10px'
        }
        const form =
            <Fade in={this.state.isEditMode}>
                <form  style={formStyle} >
                    <FormRow id="ctrlLabel" type="text" label="Type" onChange={value => item.type = value} />
                    <FormRow id="ctrlName" type="text" label="Name" onChange={value => item.name = value}/>
                    <FormRow id="ctrlFloor" type="text" label="Floor" onChange={value => item.floor = value}/>
                    <FormRow id="ctrlElectric" type="text" label="Electric Meter" onChange={value => item.electricMeter = value}/>
                </form>
            </Fade>
        return (
            <div>
                <Button bsStyle="primary"
                        onClick={() => this.toggleForm()}
                >
                    Create Items
                </Button>
                {form}
            </div>



        )
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({
    createItemContract,
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Items)