import React from "react"
import Button from "react-bootstrap/es/Button"
import Items from "../../../Items"

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
                <Items isEditMode={isEditMode}/>
            </div>
        )
    }
}

export default Toolbar
