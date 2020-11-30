import { all } from 'redux-saga/effects';
import TilesSagaWatcher from './tiles';
import SponsorshipsSagaWatcher from './sponsorships';

export default function* rootSaga() {
  yield all([
    TilesSagaWatcher(),
    SponsorshipsSagaWatcher(),
  ]);
}
