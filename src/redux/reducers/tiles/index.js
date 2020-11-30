import {
  GET_TILES_REQUEST_SUCCESS,
  GET_TILES_REQUEST_FAILURE,
} from '../../constants/tiles';

const INITIAL_STATE = {
  items: [],
  error: false,
  isLoading: true,
};

const tiles = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TILES_REQUEST_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
        isLoading: false,
        error: false,
      };
    case GET_TILES_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default tiles;
