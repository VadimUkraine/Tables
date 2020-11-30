import {
  call, takeLatest, put,
} from 'redux-saga/effects';
import { GET_TILES_REQUEST } from '../../constants/tiles';
import {
  getTilesRequestSuccess,
  getTilesRequestFailure,
} from '../../actions/tiles';
import СampaignsService from '../../../global/api/service';

export function* getTilesItemsSaga() {
  try {

    const res = yield call(СampaignsService.fetchData, 'tiles');
    yield put(getTilesRequestSuccess(res));

  } catch (err) {
    console.warn(err);
    yield put(getTilesRequestFailure());
  }
}

export default function* TilesSagaWatcher() {
  yield takeLatest(GET_TILES_REQUEST, getTilesItemsSaga);
}
