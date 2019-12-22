import { ofType, Epic } from 'redux-observable'
import { throwError } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { getType } from 'typesafe-actions'
import { userAction, UserAction, UserState } from '@action'

const url = 'https://api.github.com/users/soraping'

export const userEpic: Epic<UserAction, UserAction> = action$ =>
    action$.pipe(
        ofType(getType(userAction.postSession)),
        switchMap(() => {
            return ajax.getJSON(url).pipe(
                map((res: UserState) => userAction.setInfosd(res)),
                catchError(err => throwError(err))
            )
        })
    )
