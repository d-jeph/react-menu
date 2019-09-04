import { SELECT_MENU } from "../actions/types";
import menuData from "../data/menu-data"

const INITIAL_STATE = {
    activeIndex: "",
    menuList:menuData
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_MENU:
      return { ...state, activeIndex: 0, userId: action.payload };
    default:
      return state;
  }
};