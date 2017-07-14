import React, {Component} from 'react'
import Table from "react-bootstrap/es/Table"
import Panel from "react-bootstrap/es/Panel"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import {push} from 'react-router-redux'
import {fetchContracts, requestRoomInfo} from "./action"
import Contracts from "../Contracts"
import Items from "../Items"


class RoomFee extends Component {
    componentWillMount(){
        this.props.fetchContracts()
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    render() {
        return (<div>
                <p>Room Id: {this.props.roomId}</p>
                <Panel header="Room Fee" className="text-center" bsStyle="primary">
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th rowSpan="2" colSpan="1">Room</th>
                            <th rowSpan="2" colSpan="1">Date</th>
                            <th rowSpan="2" colSpan="1">Occupant</th>
                            <th rowSpan="2" colSpan="1">Price</th>
                            <th rowSpan="1" colSpan="3">Water Unit</th>
                            <th rowSpan="1" colSpan="3">Electric Unit</th>
                            <th rowSpan="2" colSpan="1">Others</th>
                            <th rowSpan="2" colSpan="1">Price Total</th>
                            <th rowSpan="2" colSpan="1">Note</th>
                        </tr>
                        <tr>
                            <th rowSpan="1" colSpan="1">Old Water Unit</th>
                            <th rowSpan="1" colSpan="1">New Water Unit</th>
                            <th rowSpan="1" colSpan="1">Water Price (Baht)</th>
                            <th rowSpan="1" colSpan="1">Old Electric Unit</th>
                            <th rowSpan="1" colSpan="1">New Electric Unit</th>
                            <th rowSpan="1" colSpan="1">Electric Price (Baht)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td onClick={() => this.props.requestRoomInfo('301')}> 301</td>
                            <td> DD/MM/YYYY</td>
                            <td> Name</td>
                            <td> xxxx</td>
                            <td> xxxx</td>
                            <td> xxxx</td>
                        </tr>
                        <tr>
                            <td> 302</td>
                            <td> DD/MM/YYYY</td>
                            <td> Name</td>
                            <td> xxxx</td>
                            <td> xxxx</td>
                            <td> xxxx</td>
                        </tr>
                        </tbody>
                    </Table>
                </Panel>
                <Contracts/>
                <Items/>
            </div>
        )
    }


}

const mapStateToProps = state => ({
    roomId: state.roomFeeReducer.roomId,
    isLoading: state.roomFeeReducer.isLoading,
    contracts: state.roomFeeReducer.contracts,
    error: state.roomFeeReducer.error
})
const mapDispatchToProps = dispatch => bindActionCreators({
    requestRoomInfo,
    fetchContracts,
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomFee)