
import MENU_SELECTED from "../actions/types"

export const selectMenu = menu => {
  //return action
  return {
    type: "MENU_SELECTED",
    payload: menu
  };
};



export const handleSelectMenu = titleProps => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};
