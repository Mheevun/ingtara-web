import {dispatchCreateEvent, handlerCreateEvent} from "../../helper/action"
import {itemsRef} from "../../service/firebase/ref"

const CREATE_ITEM = 'items/CREATE_ITEM'
const CREATE_ITEM_RESULT = 'items/CREATE_ITEM_RESULT'

export const createItemContract = dispatchCreateEvent(CREATE_ITEM)
export const createItemContractEpic = handlerCreateEvent(CREATE_ITEM_RESULT, itemsRef)