import { USER } from "../constants";
import { createAction, ActionType } from "typesafe-actions";

export type UserAction = ActionType<typeof userAction>;

export namespace userAction {
  type User = { id: number, name: string };
const user: User = { id: 1, name: 'Piotr' };
  export const postSession = createAction(USER.GITHUB_USER_API)<string>();

  export const setInfosd = createAction(USER.SET_USER_INFO)<User>();
  const psd = setInfosd(user)
  console.log(psd)
}
