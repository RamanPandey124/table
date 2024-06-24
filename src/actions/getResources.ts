
import { Idocument, Ireject, Iresponse } from "@/type/page"


export async function getResources(searchParams: { [key: string]: string | undefined }): Promise<Iresponse | Ireject> {
    try {
        let params = new URLSearchParams()
        for (let key in searchParams) {
            let val = searchParams[key]
            if (val) {
                params.set(key, val)
            }
        }

        const response = await fetch(`https://api.polygon.io/v3/reference/tickers?apiKey=${process.env.API_KEY}&${params.toString()}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
        return {
            status: 'ERROR',
            error: 'Error parsing JSON response'
        }
    }

}

