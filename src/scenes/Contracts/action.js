import {contractsRef} from "../../service/firebase/ref"
// import {Observable} from 'rxjs/Observable'
// import 'rxjs/add/operator/mergeMap'
// import 'rxjs/add/observable/fromPromise'
// import 'rxjs/add/operator/startWith'
// import 'rxjs/add/operator/mergeMap'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catch'
import {dispatchCreateEvent, handlerCreateEvent} from "../../helper/action"

const CREATE_CONTRACT = 'CREATE_CONTRACT'
export const CREATE_CONTRACT_RESULT = 'CREATE_CONTRACT_RESULT'

// export const createContract = (contract) => {
//     return dispatch => {
//         dispatch({
//             type: CREATE_CONTRACT,
//             contract
//         })
//     }
// }
export const createContract = dispatchCreateEvent(CREATE_CONTRACT)
export const createContractEpic = handlerCreateEvent(CREATE_CONTRACT, CREATE_CONTRACT_RESULT, contractsRef)
// export const createContractEpic = action$ => {
//     return action$.ofType(CREATE_CONTRACT)
//         .mergeMap(() =>
//             Observable.create(emitter => {
//                     contractsRef.push(action$.contract, error => {
//                         const isSuccess = !error
//                         emitter.next(createResult({isSuccess, error}))
//                         emitter.complete()
//                     })
//                 }
//             )
//         )
// }
// const createResult = ({isSuccess, error}) => ({
//     type: CREATE_CONTRACT_RESULT,
//     isSuccess,
//     error
// })
