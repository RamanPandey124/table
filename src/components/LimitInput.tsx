"use client"

import { setQueryStringParameter } from "@/actions/setQueryStringParameter"
import { useSearchParams } from "next/navigation"

export default function LimitInput() {
    const value = useSearchParams().get('limit')
    return (
        <span className="space-x-2 px-2 rounded-md">
            <label htmlFor="limit">Limit</label>
            <select
                id="limit"
                className="bg-inherit border-2 rounded-md"
                defaultValue={value || 10}
                onChange={(e) => setQueryStringParameter('limit', e.target.value)}
            >
                <option className="bg-zinc-600">5</option>
                <option className="bg-zinc-600">10</option>
                <option className="bg-zinc-600">15</option>
                <option className="bg-zinc-600">20</option>
                <option className="bg-zinc-600">25</option>
                <option className="bg-zinc-600">30</option>
            </select>
        </span>
    )
}