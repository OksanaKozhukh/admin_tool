import * as types from './types';

const initialState = {
  fetching: false,
  dog: null,
  error: null,
  isUpdateTooltipModalVisible: false,
  placement: 'top',
  color: 'red',
  title: 'tooltip title',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        dog: action.dog,
      };
    case types.API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    case types.UPDATE_TOOLTIP:
      return {
        ...state,
        placement: action.data.placement,
        color: action.data.color,
        title: action.data.title,
      };
    case types.SHOW_MODAL_UPDATE_TOOLTIP:
      return { ...state, isUpdateTooltipModalVisible: true };
    case types.HIDE_MODAL_UPDATE_TOOLTIP:
      return { ...state, isUpdateTooltipModalVisible: false };
    default:
      return state;
  }
}
