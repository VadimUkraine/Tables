import {
  call, takeLatest, put,
} from 'redux-saga/effects';
import { GET_SPONSORSHIPS_REQUEST } from '../../constants/sponsorships';
import {
  getSponsorshipsRequestSuccess,
  getSponsorshipsRequestFailure,
} from '../../actions/sponsorships';
import СampaignsService from '../../../global/api/service';

export function* getSponsorshipsItemsSaga() {
  try {

    const res = yield call(СampaignsService.fetchData, 'sponsorships');
    yield put(getSponsorshipsRequestSuccess(res));

  } catch (err) {
    console.warn(err);
    yield put(getSponsorshipsRequestFailure());
  }
}

export default function* SponsorshipsSagaWatcher() {
  yield takeLatest(GET_SPONSORSHIPS_REQUEST, getSponsorshipsItemsSaga);
}
