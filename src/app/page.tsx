"use client"

import { fetchResources } from "@/actions/getResources";
import { CounterContext } from "@/context/CounterContext";
import { Idocument } from "@/type/page";
import { ChangeEvent, use, useContext, useEffect, useState } from "react";

export default function Home() {
  const { state } = use(CounterContext)
  const [results, setResult] = useState<Idocument[]>([])
  const [cursor, setCursor] = useState<string | undefined>()

  const handleResources = async () => {
    const { results, cursor } = await fetchResources(state)
    setResult(results)
    setCursor(cursor)
  }

  useEffect(() => {
    handleResources()
  }, [state])

  return (
    <div className="bg-slate-950">
      <div className=" w-full h-96 overflow-y-scroll p-4">
        <table className="border-2 border-gray-400">
          <thead>
            <tr className=" bg-zinc-700 divide-x-2 divide-gray-400">
              <th>SNo.</th>
              <th>Ticker</th>
              <th>Name</th>
              <th>Market</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-gray-400">
            {results?.map((item, index) => (
              <tr key={item.ticker} className="divide-x-2 divide-gray-400">
                <td>{index + 1}</td>
                <td>{item.ticker}</td>
                <td>{item.name}</td>
                <td>{item.market}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NextResource cursor={cursor} />
    </div>
  )
}

function NextResource({ cursor }: { cursor?: string }) {
  const { dispatch } = use(CounterContext)

  return (
    <div className="flex justify-center space-x-4 items-center">

      <span className="space-x-2 px-2 rounded-md">
        <label htmlFor="limit">Limit</label>
        <select
          id="limit"
          className="bg-inherit border-2 rounded-md"
          defaultValue={10}
          onChange={(e) => dispatch({ type: 'QUERY', payload: { name: 'limit', value: e.target.value } })}>
          <option className="bg-zinc-600">5</option>
          <option className="bg-zinc-600">10</option>
          <option className="bg-zinc-600">15</option>
          <option className="bg-zinc-600">20</option>
          <option className="bg-zinc-600">25</option>
          <option className="bg-zinc-600">30</option>
        </select>
      </span>

      <button
        onClick={() => dispatch({ type: 'NEXT', payload: cursor })}
        className="border-2 px-4 rounded-md hover:bg-zinc-600"
      >
        Next
      </button>

    </div>
  )
}

