import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'

// slices
import appReducer from './slices/app'


const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-'
}

const rootReducer = combineReducers({
    app: appReducer,
})

export {rootPersistConfig, rootReducer};