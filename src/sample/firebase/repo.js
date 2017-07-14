import {messagesRef} from '../../service/firebase/ref'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/startWith'

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