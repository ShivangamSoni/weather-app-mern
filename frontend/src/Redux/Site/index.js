import SITE_ACTION_TYPES from "./ActionTypes";

const initialState = { notification: { message: "", show: false } };

const SiteReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SITE_ACTION_TYPES.SET_NOTIFICATION:
      return { ...state, notification: payload };
    default:
      return state;
  }
};

export default SiteReducer;
