import React, {Component} from 'react'
import RoomFee from "./features/RoomFee/index"
import Echo from "./features/Echo"

class App extends Component {
    render() {
        return <div>
            <Echo/>
            <RoomFee/>
        </div>
    }
}

export default App