import { useReducer } from "react";
import { reducer, USER_DEFAULT, USER_ACTION_TYPES } from "../reducers/user";

import { setStorage } from "../storage/localStorage";

export function useUserReducer() {
    const [state, dispatch] = useReducer(reducer, USER_DEFAULT);
    setStorage({ key: "user", value: state });

    const updateUser = ({ user }) =>
        dispatch({
            type: USER_ACTION_TYPES.UPDATE_USER,
            payload: user
        });

    const clearUser = () =>
        dispatch({
            type: USER_ACTION_TYPES.CLEAR_USER
        });

    return { user: state, updateUser, clearUser };
}
