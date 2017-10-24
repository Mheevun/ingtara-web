import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/take'

import { createEpicMiddleware } from 'redux-observable'
import { combineEpics } from 'redux-observable'
import {fetchFeesEpic} from "../features/RoomFee/action"
import {createContractEpic} from "../features/Contracts/action"
import {createItemContractEpic} from "../features/Item/ItemEdit/action"
import {observeItemsEpic} from "../features/Item/Items/action";


const rootEpic = combineEpics(
    fetchFeesEpic,
    createContractEpic,
    createItemContractEpic,
    observeItemsEpic,
)

export default createEpicMiddleware(rootEpic)
