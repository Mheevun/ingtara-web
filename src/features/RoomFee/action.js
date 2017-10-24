import {contractsRef} from "../../service/firebase/ref"
import {Observable} from 'rxjs/Observable'

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

const defaultFee = [
    {id: 1, name: "Item name 1", price: 100},
    {id: 2, name: "Item name 2", price: 100},
    {id: 3, name: "Item name 3", price: 100},
]

export const fetchFeesEpic = (action$) => {
    return action$.ofType(FETCH_FEES)
        .mergeMap(() =>
            Observable.fromPromise(contractsRef.once('value'))
                .do(snapshot => console.log(snapshot.val()))
                .map(snapshot => requesting({data: snapshot.val() === null ? [] : snapshot.val()}))
                .catch(error => requesting({isLoading: false, error: error}))
                .startWith(requesting({data: defaultFee}))
        )
    // .map( it => ({type: FETCHING_FEES}))
}

const requesting = ({isLoading = true, data = [], error}) => ({
    type: FETCHING_FEES,
    isLoading,
    data,
    error
})
