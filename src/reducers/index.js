import {combineReducers} from 'redux';
import { reducer as lists } from './lists';
import { reducer as tasks } from './tasks'


const allReducers = combineReducers({
    lists,
    tasks
});

export default allReducers; 