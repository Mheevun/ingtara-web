import {Observable} from 'rxjs/Observable'

export const dispatchCreateEvent = eventType =>(item) => {
    return dispatch => {
        dispatch({
            type: eventType,
            item
        })
    }
}

export const handlerCreateEvent = (eventType, itemRef) => action$ => {
    const createResultEvent = createResult(eventType)
    return action$.ofType(eventType)
        .mergeMap(() =>
            Observable.create(emitter => {
                itemRef.push(action$.contract, error => {
                        const isSuccess = !error
                        emitter.next(createResultEvent({isSuccess, error}))
                        emitter.complete()
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