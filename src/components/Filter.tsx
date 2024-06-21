
"use client"

import { CounterContext } from "@/context/CounterContext"
import { useParams, useSearchParams } from "next/navigation"
import { ChangeEvent, use } from "react"

const useDebounce = (func: (...arg: any[]) => any, delay: number) => {
    let timeout = null

    return (...args) => {
        if (timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

export default function Filter() {
    const { state, dispatch } = use(CounterContext)

    const loadData = async (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'QUERY', payload: { name: 'search', value: e.target.value } })
    }
    const loadDataDebounced = useDebounce(loadData, 400)

    return (
        <div className="p-4 flex justify-between">
            <span className="">
                <input
                    className="bg-inherit border-2 rounded-md"
                    placeholder="Search"
                    onChange={loadDataDebounced}
                />
            </span>
            <span className="space-x-2">
                <label htmlFor="market">Market</label>
                <select
                    id="market"
                    className="bg-inherit border-2 rounded-md"
                    onChange={(e) => dispatch({ type: 'QUERY', payload: { name: 'market', value: e.target.value } })}>
                    <option className="bg-zinc-600"></option>
                    <option className="bg-zinc-600">stocks</option>
                    <option className="bg-zinc-600">crypto</option>
                    <option className="bg-zinc-600">fx</option>
                    <option className="bg-zinc-600">otc</option>
                    <option className="bg-zinc-600">indices</option>
                </select>
            </span>
            <span className=" space-x-2">
                <label htmlFor="sort">order</label>
                <select
                    id="sort"
                    className="bg-inherit border-2 rounded-md"
                    onChange={(e) => dispatch({ type: 'QUERY', payload: { name: 'order', value: e.target.value } })}>
                    <option className="bg-zinc-600 "></option>
                    <option className="bg-zinc-600 ">asc</option>
                    <option className="bg-zinc-600 ">desc</option>
                </select>
            </span>
        </div >
    )
}

// search?: string;
//     market?: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices';
//     sort?: 'ticker' | 'name' | 'market' | 'cik';
//     order?: 'asc' | 'desc';