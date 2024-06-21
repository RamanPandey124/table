
import { Action, Ipayload, State } from "@/type/context";

export const initialState: State = {
    limit: 10
};

const handleQuery = (state: State, payload: Ipayload) => {
    state.cursor = undefined
    state[payload.name] = payload.value
    // console.log(state,payload)
    return { ...state }
}
const handleNext = (state: State, payload: string) => {
    state.cursor = payload
    console.log(state)
    return { ...state }
}

export const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {

        case ('QUERY'):
            return handleQuery(state, action.payload);
        case ('NEXT'):
            return handleNext(state, action.payload);

        default:
            return state;
    }
};
