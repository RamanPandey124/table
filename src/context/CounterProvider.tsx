
import { Action, State } from "@/type/context";

export const initialState: State = {
    ticker: undefined,
    market: undefined,
    type: undefined,
    order: undefined,
    limit: 10
};

const handleQuery = (state:State, payload) => {
    // console.log(payload)
    state.ticker = payload.name
    state.market = payload.category
    state.order = payload.order
    console.log(state)
    return { ...state }
}

export const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {

        case ('QUERY'):
            return handleQuery(state, action.payload);

        default:
            return state;
    }
};
