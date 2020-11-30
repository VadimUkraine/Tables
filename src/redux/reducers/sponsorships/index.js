import {
  GET_SPONSORSHIPS_REQUEST_SUCCESS,
  GET_SPONSORSHIPS_REQUEST_FAILURE,
} from '../../constants/sponsorships';

const INITIAL_STATE = {
  items: [],
  error: false,
  isLoading: true,
};

const sponsorships = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SPONSORSHIPS_REQUEST_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
        isLoading: false,
        error: false,
      };
    case GET_SPONSORSHIPS_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default sponsorships;
