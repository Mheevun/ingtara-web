import {dispatchCreateEvent, handlerCreateEvent} from "../../helper/action"
import {itemsRef} from "../../service/firebase/ref"
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of';


const CREATE_ITEM = 'items/CREATE_ITEM'
const CREATE_ITEM_RESULT = 'items/CREATE_ITEM_RESULT'

export const createItem = dispatchCreateEvent(CREATE_ITEM)
export const createItemContractEpic = handlerCreateEvent(CREATE_ITEM, CREATE_ITEM_RESULT, itemsRef)


// export const createItemContractEpic = (action$) => {
//     const createResultEvent = createResult(CREATE_ITEM_RESULT)
//     const itemRef = itemsRef
//     return action$
//         .do(action => {
//                 console.log("filter: "+CREATE_ITEM+", type: "+action.type)
//             }
//         )
//         .ofType(CREATE_ITEM)
//         .mergeMap((action) =>
//             Observable.create(observer => {
//                     console.log("create")
//                     itemRef.push(action.item, error => {
//                         const isSuccess = !error
//                         console.log(isSuccess)
//                         observer.next(createResultEvent({isSuccess, error}))
//                         observer.complete()
//                     })
//                 }
//             )
//         )
// }
//
// const createResult = eventType => ({isSuccess, error}) => ({
//     type: eventType,
//     isSuccess,
//     error
// })