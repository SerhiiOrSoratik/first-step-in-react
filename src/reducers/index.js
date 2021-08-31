import {combineReducers} from 'redux';
import { reducer as tasks } from './tasks'
import { reducer as dashboard } from './dashboard';

const allReducers = combineReducers({
    tasks, 
    dashboard
});


export default allReducers; 