import { getType } from "typesafe-actions";
import { userAction, UserAction } from "../action";

export interface UserState {
  name: string;
}

const initialState = {
  name: "",
};

export default function userReducer(
  state: UserState = initialState,
  action: UserAction
) {
  switch (action.type) {
    case getType(userAction.setInfosd):
      const { payload: { name, id }} = action
      return { ...state, name };
    default:
      return state;
  }
}
