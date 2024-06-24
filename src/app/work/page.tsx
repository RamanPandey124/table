"use client"
import { useSearchParams } from "next/navigation"
import { use } from "react"


export default function work() {
    // const params = useSearchParams()
    // console.log(params.toString())
    // const response = use(fetch(`https://api.polygon.io/v3/reference/tickers?apiKey=1nhIUtrZj8OB255c0KaxqypbpqTwaSli&${params.toString()}`))
    // const result = use(response.json())
    const result = []
    console.log(result)

    return (
        <div>
            <p>no effect of wait</p>
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
                        {result?.results?.map((item, index) => (
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
        </div>
    )
}