import {contractsRef} from "../../service/firebase/ref"
import {dispatchCreateEvent, handlerCreateEvent} from "../../helper/FirebaseCreateAction"

const CREATE_CONTRACT = 'CREATE_CONTRACT'
export const CREATE_CONTRACT_RESULT = 'CREATE_CONTRACT_RESULT'

export const createContract = dispatchCreateEvent(CREATE_CONTRACT)
export const createContractEpic = handlerCreateEvent(CREATE_CONTRACT, CREATE_CONTRACT_RESULT, contractsRef)
