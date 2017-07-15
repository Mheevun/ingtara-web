import React from "react"
import bindActionCreators from "redux/es/bindActionCreators"
import connect from "react-redux/es/connect/connect"
import {createItemContract} from "./action"
import Button from "react-bootstrap/es/Button"
import Form from "react-bootstrap/es/Form"
import FormRow from "./components/FormRow/index"
import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6


class Items extends React.Component {
    constructor(props) {
        super(props)
        this.item = {}
        this.state = {
            isEditMode: false
        }
    }

    toggleForm(){
        this.setState({isEditMode: !this.state.isEditMode})
    }

    render() {
        const item = this.item
        const form =
            <Form horizontal>
                <FormRow label="Type" onChange={value => item.type = value}/>
                <FormRow label="Name" onChange={value => item.name = value}/>
                <FormRow label="Floor" onChange={value => item.floor = value}/>
                <FormRow label="Electric Meter" onChange={value => item.electricMeter = value}/>
            </Form>
        return (
            <div>
                <Button style={this.btnStyle} bsStyle="primary"
                        onClick={() => this.toggleForm()}
                >
                    Create Items
                </Button>
                {this.state.isEditMode ? form : null}
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