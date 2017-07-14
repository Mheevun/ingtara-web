import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/startWith'
import {roomsRef} from './ref'

export default class Repository {
    getData() {
        return Observable.create(observer => {
            messagesRef.on('value', snapshot => {
                /* Update React state when message is added at Firebase Database */
                const items = {messages: [], isLoading: false}
                snapshot.forEach(shot => {
                    items.messages.push({text: shot.val(), id: shot.key})
                    console.log(shot.val())
                })
                observer.next(items)
            })
        }).startWith({messages: [], isLoading: true})
    }


}

export const createRoom = (name, floor, eMeterIds, wMeterIds) =>{
    const eMetersValue= {}
    eMeterIds.forEach( id => eMetersValue[id] = true )

    const wMetersValue= {}
    wMeterIds.forEach( id => wMetersValue[id] = true )

    roomsRef.push({
        name,
        floor,
        "eMeters": eMetersValue,
        "wMeters": wMetersValue
    })
}