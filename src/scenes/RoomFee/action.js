import {contractsRef} from "../../service/firebase/ref"
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

export const REQUEST_ROOM_INFO = 'REQUEST_ROOM_INFO'
const FETCH_FEES = 'FETCH_FEES'
export const FETCHING_FEES = 'FETCHING_FEES'

export const requestRoomInfo = roomId => {
    return dispatch => {
        dispatch({
            type: REQUEST_ROOM_INFO,
            roomId
        })
    }
}

export const fetchFees = (month) => {
    return dispatch => {
        dispatch({
            type: FETCH_FEES,
            month
        })
    }
}
export const fetchContractsEpic = (action$) => {
    return action$.ofType(FETCH_FEES)
        .mergeMap(() =>
            Observable.fromPromise(contractsRef.once('value'))
                .startWith(requesting)
                .map(snapshot => requesting({data: snapshot.val()}))
                .catch(error => requesting({isLoading: false, error: error}))
        )
}

const requesting = ({isLoading = true, data, error}) => ({
    type: FETCHING_FEES,
    isLoading,
    data,
    error
})

