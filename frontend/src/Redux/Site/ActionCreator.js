import SITE_ACTION_TYPES from "./ActionTypes";

export const hideNotification = () => ({ type: SITE_ACTION_TYPES.SET_NOTIFICATION, payload: { message: "", show: false } });

export const showNotification = (message) => ({ type: SITE_ACTION_TYPES.SET_NOTIFICATION, payload: { message, show: true } });
