import { fetchResources } from "@/actions/getResources"
import { State } from "@/type/context"
import { Idocument } from "@/type/page"
import { use, useEffect, useState } from "react"

export default function Parent({ state }:{state:State}) {
  // console.log(state)
  // console.log(results)
  const [results, setResult] = useState([])

  const handleResults = async () => {

    const data=await fetchResources(state)
    setResult(data)
  }

  useEffect(() => {
    handleResults()
  }, [state])

  return (
    <div className="flex justify-center">

      <table className="border-2 m-4 divide-y-4 max-h-96 overflow-scroll">
        <thead>
          <tr className="bg-zinc-800">
            <th>Name</th>
            <th>market</th>
            <th>type</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="divide-y-2">
          {results?.map((item) => (
            <tr>
              <td>{item.ticker}</td>
              <td>{item.market}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}