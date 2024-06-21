import { State } from "@/type/context"
import { Idocument, Ireject, Iresponse } from "@/type/page"


export async function fetchResources(state: State): Promise<{ results: Idocument[], cursor?: string }> {
    const param = new URLSearchParams()

    // const param = new URLSearchParams(window.location.href)
    // console.log(param.get("limit"));

    // console.log(state)

    for (let key in state) {
        let val = state[key]
        if (val) {
            param.set(key, val)
        }
    }
    setQueryStringParameter(param)

    const response = await fetch(`https://api.polygon.io/v3/reference/tickers?apiKey=1nhIUtrZj8OB255c0KaxqypbpqTwaSli&${param.toString()}`)
    const data: Iresponse | Ireject = await response.json()


    if (data.status === 'ERROR') {
        alert(data.error)
        return { results: [], cursor: undefined }
    }

    return { results: data.results, cursor: data.next_url?.split('=')[1] }
}

function setQueryStringParameter(param: URLSearchParams) {
    const url = new URL(`${window.location.origin}?${param.toString()}`)
    window.history.replaceState(null, "", url.toString());
}


/**
 *  // console.log(data)
    const data = {

        results: [

            {

                ticker: 'A',

                name: 'Agilent Technologies Inc.',

                market: 'stocks',

                locale: 'us',

                primary_exchange: 'XNYS',

                type: 'CS',

                active: true,

                currency_name: 'usd',

                cik: '0001090872',

                composite_figi: 'BBG000C2V3D6',

                share_class_figi: 'BBG001SCTQY4',

                last_updated_utc: '2024-05-17T00:00:00Z'

            },

            {

                ticker: 'AA',

                name: 'Alcoa Corporation',

                market: 'stocks',

                locale: 'us',

                primary_exchange: 'XNYS',

                type: 'CS',

                active: true,

                currency_name: 'usd',

                cik: '0001675149',

                composite_figi: 'BBG00B3T3HD3',

                share_class_figi: 'BBG00B3T3HF1',

                last_updated_utc: '2024-06-18T00:00:00Z'

            },

            {

                ticker: 'AAA',

                name:

                    'Alternative Access First Priority CLO Bond ETF',

                market: 'stocks',

                locale: 'us',

                primary_exchange: 'ARCX',

                type: 'ETF',

                active: true,

                currency_name: 'usd',

                cik: '0001776878',

                composite_figi: 'BBG01B0JRCS6',

                share_class_figi: 'BBG01B0JRCT5',

                last_updated_utc: '2024-06-18T00:00:00Z'

            },

            {

                ticker: 'AAAIF',

                name: 'ALTERNATIVE INVSTMENT TR',

                market: 'otc',

                locale: 'us',

                type: 'FUND',

                active: true,

                currency_name: 'USD',

                last_updated_utc: '2022-08-26T05:00:07.114Z'

            },

            {

                ticker: 'AAALY',

                name: 'AAREAL BANK AG UNSP/ADR',

                market: 'otc',

                locale: 'us',

                type: 'ADRC',

                active: true,

                currency_name: 'USD',

                composite_figi: 'BBG002628DF1',

                share_class_figi: 'BBG002628F57',

                last_updated_utc: '2023-05-04T05:00:29.876Z'

            },

            {

                ticker: 'AAAU',

                name: 'Goldman Sachs Physical Gold ETF Shares',

                market: 'stocks',

                locale: 'us',

                primary_exchange: 'BATS',

                type: 'ETF',

                active: true,

                currency_name: 'usd',

                cik: '0001708646',

                composite_figi: 'BBG00LPXX872',

                share_class_figi: 'BBG00LPXX8Z1',

                last_updated_utc: '2024-06-18T00:00:00Z'

            },

            {

                ticker: 'AABB',

                name: 'ASIA BROADBAND INC',

                market: 'otc',

                locale: 'us',

                type: 'CS',

                active: true,

                currency_name: 'USD',

                composite_figi: 'BBG000CWNRN5',

                share_class_figi: 'BBG001SGRBK5',

                last_updated_utc: '2024-02-13T09:45:11.736Z'

            },

            {

                ticker: 'AABVF',

                name: 'ABERDEEN INTL INC',

                market: 'otc',

                locale: 'us',

                type: 'OS',

                active: true,

                currency_name: 'USD',

                composite_figi: 'BBG000BXKHJ4',

                share_class_figi: 'BBG001S6XZ90',

                last_updated_utc: '2023-05-10T05:00:36.305Z'

            },

            {

                ticker: 'AACAF',

                name: 'AAC TECHS HLDGS INC ORD',

                market: 'otc',

                locale: 'us',

                type: 'OS',

                active: true,

                currency_name: 'USD',

                last_updated_utc: '2022-06-24T14:14:05.429Z'

            },

            {

                ticker: 'AACAY',

                name: 'AAC TECHS HLDGS UNSP/ADR',

                market: 'otc',

                locale: 'us',

                type: 'ADRC',

                active: true,

                currency_name: 'USD',

                composite_figi: 'BBG000VNTB62',

                share_class_figi: 'BBG001T3PT80',

                last_updated_utc: '2023-04-14T05:00:16.614Z'

            }

        ],

        status: 'OK',

        request_id: '66bb82c0c10c0dab9e6ee5c82e295445',

        count: 10,

        next_url:

            'https://api.polygon.io/v3/reference/tickers?cursor=YWN0aXZlPXRydWUmYXA9QUFDQVklN0NiYTk2ZmQwNjA5ZDQ5Mjc0MGU2NmY3ZDFjMzQ3MTA5MjQ4MzAxNzRkNGRmOGY3ZTQ2YjM1MmNiODlmNjcxNTE2JmFzPSZkYXRlPTIwMjQtMDYtMjEmbGltaXQ9MTAmb3JkZXI9YXNjJnNvcnQ9dGlja2Vy'

    }
 */