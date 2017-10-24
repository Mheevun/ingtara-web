import React from "react"
import {itemsRef} from "../../../service/firebase/ref";
import {observeItems} from "./action";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {bindActionCreators} from "redux";
import {Card, CardTitle} from "reactstrap";
import {connect} from "react-redux";

class ItemListComp extends React.Component {

    componentWillMount() {
        this.props.observeItems(itemsRef)
    }

    render() {
        // const items = JSON.stringify(this.props.items, null, 2)
        return (
            <Card>
                <CardTitle>Items</CardTitle>
                <BootstrapTable data={ this.props.items }>
                    <TableHeaderColumn dataField='name' isKey>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                    <TableHeaderColumn dataField='floor'>Floor</TableHeaderColumn>
                    <TableHeaderColumn dataField='floor'>Electric Meter</TableHeaderColumn>
                </BootstrapTable>
            </Card>)
    }
}

const mapStateToProps = state => ({
    items: state.itemListReducer.items
})
const mapDispatchToProps = dispatch => bindActionCreators({
    observeItems
}, dispatch)
const ItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemListComp)

export default ItemList