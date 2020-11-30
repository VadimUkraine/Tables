import {
  GET_TILES_REQUEST,
  GET_TILES_REQUEST_SUCCESS,
  GET_TILES_REQUEST_FAILURE,
} from '../../constants/tiles';

export const getTilesRequest = () => ({ type: GET_TILES_REQUEST });

export const getTilesRequestSuccess = (data) => ({
  type: GET_TILES_REQUEST_SUCCESS,
  payload: { data },
});

export const getTilesRequestFailure = () => ({ type: GET_TILES_REQUEST_FAILURE });
