import { getType } from 'typesafe-actions'
import { userAction, UserAction, UserState } from '@action'

const initialState = {
    id: null,
    name: ''
}

const userReducer = (state: UserState = initialState, action: UserAction) => {
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

export default userReducer
