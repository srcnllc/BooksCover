
const INITIAL_STATE = {
    data:[],
    message:''
};

export const reducers = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'GET_DATA_SUCCESS':
            return {
               ...state,
                data:action.payload
            }
        case 'GET_DATA_ERROR':
            return {
               ...state,
                message:action.payload
            }
        case 'GET_DATA_LOADING':
        default:
            return state;
    }
};