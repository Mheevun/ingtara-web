import {Observable} from 'rxjs/Observable'

export const dispatchCreateEvent = eventType => (item) => {
    return dispatch => {
        dispatch({
            type: eventType,
            item
        })
    }
}

export const handlerCreateEvent = (filterEventType, resultEvent, itemRef) => (action$) => {
    const createResultEvent = createResult(resultEvent)
    return action$.ofType(filterEventType)
        .mergeMap((action) =>
            Observable.create(observer => {
                    itemRef.push(action.item, error => {
                        const isSuccess = !error
                        observer.next(createResultEvent({isSuccess, error}))
                        observer.complete()
                    })
                }
            )
        )
}

const createResult = eventType => ({isSuccess, error}) => ({
    type: eventType,
    isSuccess,
    error
})