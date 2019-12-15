import { USER } from "@constants";
import { createAction, ActionType, action } from "typesafe-actions";

export type UserAction = ActionType<typeof userActions>;

export namespace userActions {
  export const getGitHubUser = createAction(USER.GITHUB_USER_API);

  export const setUserInfo = createAction(USER.SET_USER_INFO, user => action(user));
  );
}
