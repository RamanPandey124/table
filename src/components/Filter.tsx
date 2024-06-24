"use client"

import { setQueryStringParameter } from "@/actions/setQueryStringParameter"
import { useSearchParams } from "next/navigation"
import { ChangeEvent, use } from "react"


export default function Filter() {

    return (
        <div className="p-4 flex justify-between">
            <SearchInput />
            <SelectMarket />
            <SelectOrder />
        </div >
    )
}

const useDebounce = (func: (...arg: any[]) => any, delay: number) => {
    let timeout = null

    return (...args) => {
        if (timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

function SearchInput() {
    const value = useSearchParams().get('search') as string
    const loadData = async (e: ChangeEvent<HTMLInputElement>) => {
        setQueryStringParameter('search', e.target.value)
    }
    const loadDataDebounced = useDebounce(loadData, 400)
    return (
        <span className="">
            <input
                defaultValue={value}
                className="bg-inherit border-2 rounded-md"
                placeholder="Search"
                onChange={loadDataDebounced}
            />
        </span>
    )
}

function SelectMarket() {
    const value = useSearchParams().get('market') as string
    return (
        <span className="space-x-2">
            <label htmlFor="market">Market</label>
            <select
                id="market"
                className="bg-inherit border-2 rounded-md"
                defaultValue={value}
                onChange={(e) => { setQueryStringParameter('market', e.target.value) }}>
                <option className="bg-zinc-600"></option>
                <option className="bg-zinc-600">stocks</option>
                <option className="bg-zinc-600">crypto</option>
                <option className="bg-zinc-600">fx</option>
                <option className="bg-zinc-600">otc</option>
                <option className="bg-zinc-600">indices</option>
            </select>
        </span>
    )
}

function SelectOrder() {
    const value = useSearchParams().get('order') as string
    return (
        <span className=" space-x-2">
            <label htmlFor="sort">order</label>
            <select
                id="sort"
                className="bg-inherit border-2 rounded-md"
                defaultValue={value}
                onChange={(e) => { setQueryStringParameter('order', e.target.value) }}>
                <option className="bg-zinc-600 "></option>
                <option className="bg-zinc-600 ">asc</option>
                <option className="bg-zinc-600 ">desc</option>
            </select>
        </span>
    )
}