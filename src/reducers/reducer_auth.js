import { LOG_IN, LOG_OUT } from '../actions/auth';

export default function (state = { logged: false }, action) {
    switch (action.type) {
        case LOG_IN:
            return action.payload;
        case LOG_OUT:
            return action.payload;
        default:
            return state;
    }
}