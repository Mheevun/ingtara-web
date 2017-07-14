import React from "react"
import Button from "react-bootstrap/es/Button"
import connect from "react-redux/es/connect/connect"
import bindActionCreators from "redux/es/bindActionCreators"
import {createContract} from "./action"
import FormItem from "./components/FormItem"

class Contracts extends React.Component {
    constructor(props) {
        super(props)
    }

    btnStyle = {
        marginTop: '10px'
    }

    render() {
        return (
            <div>
                <form>
                    <FormItem label="Room" onValueChange={(value) => this.room = value}/>
                </form>

                <Button style={this.btnStyle} type="submit" bsStyle="primary"
                    // onClick={()=>this.props.createContract()}
                        onClick={() => console.log(this.room)}
                >
                    Add Contract
                </Button>
            </div>
        )
    }
}
Contracts.defaultProps={
    room: 'Room'
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({
    createContract,
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contracts)

