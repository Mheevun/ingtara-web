import { createEpicMiddleware } from 'redux-observable'
import { combineEpics } from 'redux-observable'
import {fetchContractsEpic} from "../scenes/RoomFee/action"
import {createContractEpic} from "../scenes/Contracts/action"
import {createItemContractEpic} from "../scenes/Items/action"

const rootEpic = combineEpics(
    fetchContractsEpic,
    createContractEpic,
    createItemContractEpic
)

export default createEpicMiddleware(rootEpic)
