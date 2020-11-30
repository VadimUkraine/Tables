import { combineReducers } from 'redux';
import sponsorshipsReducer from './sponsorships';
import tilesReducer from './tiles';

const rootReducer = combineReducers({
  sponsorships: sponsorshipsReducer,
  tiles: tilesReducer,
});

export default rootReducer;
