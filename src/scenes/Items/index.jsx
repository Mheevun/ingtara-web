import React from "react"
import bindActionCreators from "redux/es/bindActionCreators"
import connect from "react-redux/es/connect/connect"
import {createItemContract} from "./action"
import Button from "react-bootstrap/es/Button"
import Form from "react-bootstrap/es/Form"
import FormRow from "./components/FormRow/index"

class Items extends React.Component {
    constructor(props) {
        super(props)
        this.item = {}
    }

    render() {
        const item = this.item
        return (
            <Form horizontal>
                <FormRow label="Type" onChange={value => item.type = value}/>
                <FormRow label="Name" onChange={value => item.name = value}/>
                <FormRow label="Floor" onChange={value => item.floor = value}/>
                <FormRow label="Electric Meter" onChange={value => item.electricMeter = value}/>
                <Button style={this.btnStyle} bsStyle="primary"
                    // onClick={()=>this.props.createContract()}
                        onClick={() => console.log(item)}
                >
                    Add Items
                </Button>
            </Form>
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