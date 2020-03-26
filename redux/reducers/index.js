import { combineReducers } from 'redux'
import basicDatasReducer from '../basicdatas/reducer';
import tourFilterReducer from '../tourFilters/reducer';
import paymenObject from '../payment/reducer';
import tourTabsReducer from '../tourTabs/reducer';
import cityListReducer from '../cityList/reducer';
import weblogGridReducer from '../weblogGrid/reducer';
import roomsReducer from '../rooms/reducer';
import searchTourReducer from '../searchtour/reducer';

export default combineReducers({
    basicDatasReducer,
    tourFilterReducer,
    paymenObject,
    tourTabsReducer,
    cityListReducer,
    weblogGridReducer,
    roomsReducer,
    searchTourReducer
})
