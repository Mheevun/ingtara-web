import React, {Component} from 'react'
import RoomFee from "./scenes/RoomFee/index"
import Echo from "./service/echo"

class App extends Component {
    render() {
        return <div>
            <Echo/>
            <RoomFee/>
        </div>
    }
}

export default App