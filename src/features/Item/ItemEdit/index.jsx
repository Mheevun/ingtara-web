import React from "react"
import {createItem} from "./action"
import FormRow from "./components/FormRow/index"
import Fade from "../../../animation/Fade"
import {Button, Card, Form} from "reactstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class ItemEditComp extends React.Component {
    constructor(props) {
        super(props)
        this.item = {}
    }

    render() {
        const item = this.item
        const isEditMode = this.props.isEditMode
        const form =
            <Fade in={isEditMode}>
                <Card className="form">
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
                </Card>
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
const ItemEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemEditComp)

export default ItemEdit