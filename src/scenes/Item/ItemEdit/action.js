import {dispatchCreateEvent, handlerCreateEvent} from "../../../helper/FirebaseCreateAction"
import {itemsRef} from "../../../service/firebase/ref"
import 'rxjs/add/observable/of';

const CREATE_ITEM = 'items/CREATE_ITEM'
const CREATE_ITEM_RESULT = 'items/CREATE_ITEM_RESULT'

export const createItem = dispatchCreateEvent(CREATE_ITEM)
export const createItemContractEpic = handlerCreateEvent(CREATE_ITEM, CREATE_ITEM_RESULT, itemsRef)