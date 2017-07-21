import { createEpicMiddleware } from 'redux-observable'
import { combineEpics } from 'redux-observable'
import {fetchFeesEpic} from "../scenes/RoomFee/action"
import {createContractEpic} from "../scenes/Contracts/action"
import {createItemContractEpic} from "../scenes/Items/action"

const rootEpic = combineEpics(
    fetchFeesEpic,
    createContractEpic,
    createItemContractEpic
)

export default createEpicMiddleware(rootEpic)
