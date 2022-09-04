import { ADD,REMOVE } from "./actiontype"
const initstate = {
    data:[]
}

export const reducer = (state=initstate, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                data:[...state.data,action.payload],
            }
        case REMOVE:
            const newdata = state.data.filter((item) => item.title!=action.payload )
            return {
                ...state,
                data: newdata,
            }
            
            
    
        default:
            return state;
    }
}