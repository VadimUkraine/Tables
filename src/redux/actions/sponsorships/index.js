import {
  GET_SPONSORSHIPS_REQUEST,
  GET_SPONSORSHIPS_REQUEST_SUCCESS,
  GET_SPONSORSHIPS_REQUEST_FAILURE,
} from '../../constants/sponsorships';

export const getSponsorshipsRequest = () => ({ type: GET_SPONSORSHIPS_REQUEST });

export const getSponsorshipsRequestSuccess = (data) => ({
  type: GET_SPONSORSHIPS_REQUEST_SUCCESS,
  payload: { data },
});

export const getSponsorshipsRequestFailure = () => ({ type: GET_SPONSORSHIPS_REQUEST_FAILURE });
