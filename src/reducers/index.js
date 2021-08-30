import {combineReducers} from 'redux';
import { reducer as lists } from './lists';
import { reducer as tasks } from './tasks'
import { reducer as dashboard } from './dashboard';

const allReducers = combineReducers({
    lists,
    tasks, 
    dashboard
});

export default allReducers; 