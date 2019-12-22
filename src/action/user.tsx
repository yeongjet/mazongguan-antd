import { USER } from '../constants'
import { createAction, ActionType } from 'typesafe-actions'

export type User = { id: number; name: string }
// const user: User = { id: 1, name: 'Piotr' }

export const userAction = {
    postSession: createAction(USER.GITHUB_USER_API)<string>(),

    setInfosd: createAction(USER.SET_USER_INFO)<User>()
}
export type UserAction = ActionType<typeof userAction>
