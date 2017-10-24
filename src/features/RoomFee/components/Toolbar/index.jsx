import React from "react"
import ItemEdit from "../../../Item/ItemEdit/index";
import {Button} from "reactstrap";

class Toolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditMode: false
        }
    }

    toggleForm() {
        this.setState({isEditMode: !this.state.isEditMode})
    }

    render() {
        const isEditMode = this.state.isEditMode
        return (
            <div>
                <div style={{margin:'10px 10px 10px 0px'}}>
                    <Button bsStyle="primary" onClick={() => this.toggleForm()}>
                        Create Items
                    </Button>
                </div>
                <ItemEdit isEditMode={isEditMode}/>
            </div>
        )
    }
}

export default Toolbar
