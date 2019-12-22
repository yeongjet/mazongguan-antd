import { ofType, ActionsObservable, Epic } from 'redux-observable'
import { throwError } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { getType } from 'typesafe-actions'
import { userAction, UserAction, User } from '../action'
import { UserState } from '../reducer'

const url = 'https://api.github.com/users/soraping'

export const userEpic: Epic<UserAction, UserAction, UserState> = action$ =>
    action$.pipe(
        ofType(getType(userAction.postSession)),
        switchMap(() => {
            return ajax.getJSON(url).pipe(
                map((res: User) => userAction.setInfosd(res)),
                catchError(err => throwError(err))
            )
        })
    )
