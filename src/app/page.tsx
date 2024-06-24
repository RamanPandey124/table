import { getResources } from "@/actions/getResources";
import LimitInput from "@/components/LimitInput";
import NextBtn from "@/components/NextBtn";

export default async function Home({ searchParams, }: { searchParams: { [key: string]: string | undefined } }) {

  const data = await getResources(searchParams)

  if (data.status === 'ERROR') {
    return <div>{data.error}</div>
  }

  return (
    <div className="bg-state-900">
      <div className=" h-96 overflow-y-scroll p-4">
        <table className="border-2 border-gray-400 w-full">
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
            {data.results?.map((item, index) => (
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
      <div className="flex justify-center space-x-4 items-center">
        <LimitInput />
        {data.next_url && <NextBtn nextUrl={data.next_url} />}
      </div>
    </div>
  )
}

