import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {fetchFees, requestRoomInfo} from "./action"
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table"
import {monthNumToName} from "../../helper/month-name-number-conversion"
import Toolbar from "./components/Toolbar/index"
import ItemList from "../Item/Items/index";

const cellEditProp = {
    mode: 'click',
    blurToSave: true
}

class RoomFee extends Component {
    componentWillMount() {
        const month = this.props.month
        console.log("RoomFee")
        this.props.fetchFees(month)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    render() {
        const monthName = monthNumToName(this.props.month)
        const fees = this.props.fees
        console.log("fees: "+fees)
        return (<div>
                <p>Month: {monthName}</p>
                <BootstrapTable data={ fees } striped hover cellEdit={ cellEditProp }>
                    <TableHeaderColumn dataAlign='center' row='0' rowSpan='2' dataField='id' isKey
                                       hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='0' rowSpan='2'
                                       dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='0' rowSpan='2'
                                       dataField='contractor'>Contractor</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='0' rowSpan='2' dataField='room_price'>Room
                        Price</TableHeaderColumn>

                    <TableHeaderColumn dataAlign='center' row='0' colSpan='3'>Water</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='1' dataField='water_old_unit'>Old
                        Unit</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='1' dataField='water_new_unit'>New
                        Unit</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='1' dataField='water_price'>Price</TableHeaderColumn>

                    <TableHeaderColumn dataAlign='center' row='0' colSpan='3'>Electric</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='1' dataField='electric_old_unit'>Old
                        Unit</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='1' dataField='electric_new_unit'>New
                        Unit</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='1'
                                       dataField='electric_price'>Price</TableHeaderColumn>

                    <TableHeaderColumn dataAlign='center' row='0' rowSpan='2'
                                       dataField='others'>Others</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='0' rowSpan='2'
                                       dataField='total'>Total</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' row='0' rowSpan='2'
                                       dataField='note'>Note</TableHeaderColumn>
                </BootstrapTable>
                <Toolbar />
                <ItemList/>
            </div>
        )
    }
}

RoomFee.defaultProps = {
    month: new Date().getMonth(),
}


const mapStateToProps = state => ({
    roomId: state.roomFeeReducer.roomId,
    isLoading: state.roomFeeReducer.isLoading,
    fees: state.roomFeeReducer.fees,
    error: state.roomFeeReducer.error
})
const mapDispatchToProps = dispatch => bindActionCreators({
    requestRoomInfo,
    fetchFees,
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomFee)