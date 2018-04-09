import { searchVideo } from '../../utils/request';

export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const UPDATE_VIDEO_LIST = 'UPDATE_VIDEO_LIST';

export function updateVideoList(payload) {
  return {
    type: UPDATE_VIDEO_LIST,
    payload,
  }
}

export function getVideoList () {
  return (dispatch, getState) => {
    searchVideo({ keyword: '诺手' }).then(res => {
      dispatch(updateVideoList(res));
    });
  }
}
