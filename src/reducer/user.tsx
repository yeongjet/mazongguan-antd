import { getType } from 'typesafe-actions'
import { userAction, UserAction, User as UserState } from '../action'

const initialState = {
    id: null,
    name: ''
}

export default function userReducer(
    state: UserState = initialState,
    action: UserAction
) {
    switch (action.type) {
        case getType(userAction.setInfosd):
            const {
                payload: { name, id }
            } = action
            return { ...state, name }
        default:
            return state
    }
}
