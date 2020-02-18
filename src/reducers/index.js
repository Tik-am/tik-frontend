import { combineReducers } from 'redux';

import  { teamMembers }  from './teamMembers';

const rootReducer = combineReducers({
    teamMembers,
});

export default rootReducer;
