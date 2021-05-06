import {actions} from '../actions'
const initialState = {
    data: [],
    loading: false,
    error: null

}
export default function reducerCoinGecko(state = initialState, action){
    if (action.type === actions.GET_COINGECKO_DATA) {
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === actions.SUCCESS_COINGECKO_DATA) {
        return {
            ...state,
            loading: false,
            data: action.data,

        }
    }
    else if (action.type === actions.COINGECKO_FILTER_DATA) {
        return {
            ...state,
            loading: false
        }
    }
    else if (action.type === actions.FAILED_COINGECKO_DATA) {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
    else {
        return state 
    }
}