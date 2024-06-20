"use client"

import { getName } from "@/actions/getResources"
import { CounterContext } from "@/context/CounterContext"
import { use, useEffect, useState } from "react"

export default function Search() {
    const { dispatch } = use(CounterContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get('name')
        const category = formData.get('category')
        const order = formData.get('order')

        // console.log(name)
        const data = {
            name,
            category,
            order
        }
        dispatch({ type: 'QUERY', payload: data })
    }

    return (
        <div>
            <form className="flex justify-evenly" onSubmit={handleSubmit}>
                <input
                    className="bg-gray-800 border-2"
                    type="text"
                    name="name"
                />
                <select className="bg-gray-800" name="category">
                    {/* <option>market</option> */}
                    <option>stocks</option>
                    <option>crypto</option>
                    <option>fx</option>
                    <option>otc</option>
                    <option>indices</option>

                </select>
                <select className="bg-gray-800" name="order">
                    {/* <option>order</option> */}
                    <option>asc</option>
                    <option>desc</option>
                </select>
                <button className="border-2 hover:bg-zinc-600" type="submit">Submit</button>
            </form>
        </div>
    )
}