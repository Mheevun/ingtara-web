import fire from './fire'
const msgRootRef = fire.database().ref('root')
export const messagesRef = msgRootRef.child('messages')

const rootRef = fire.database().ref()
export const itemsRef = rootRef.child('items')
export const contractsRef = rootRef.child('contracts')
export const contractorsRef = rootRef.child('contractors')
export const meterLogsRef = rootRef.child('meterLogs')