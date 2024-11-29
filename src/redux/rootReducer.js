import { combineReducers } from '@reduxjs/toolkit/dist';
import storage from 'redux-persist/lib/storage'


const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-'
}

const rootReducer = combineReducers({
    // TODO => create and map reducers
})

export {rootPersistConfig, rootReducer};