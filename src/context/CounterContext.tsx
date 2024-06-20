
"use client"

import { Dispatch, createContext, useReducer } from "react"
import { counterReducer, initialState } from "./CounterProvider"
import { Action, State } from "@/type/context";

interface CounterContextProps {
    state: State;
    dispatch: Dispatch<Action>;
}

export const CounterContext = createContext<CounterContextProps>({} as CounterContextProps)

export default function CounterProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}

