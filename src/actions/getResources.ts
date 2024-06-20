import { State } from "@/type/context"


export async function fetchResources(state: State) {
    const { ticker, market, type, order, limit = 10 } = state

    const param = new URLSearchParams()
    for (let key in state) {
        let val = state[key]
        console.log(val);

        if (val) {
            console.log("=>", key);
            param.set(key, val)
        }
    }
    console.log(param.toString())

    const response = await fetch(`https://api.polygon.io/v3/reference/tickers?apiKey=U7mOPE6UZjmXOUDzWC84pNWz1hwJTDeC&${param.toString()}`,)

    const result = await response.json()
    console.log(result)
    return result.results
}

// export async function getName() {
//     const response = await fetch(`https://api.polygon.io/v3/reference/tickers?apiKey=1nhIUtrZj8OB255c0KaxqypbpqTwaSli`,)
//     const { results } = await response.json()
//     let arr = []
//     for (let value of results) {
//         arr.push(value.ticker)
//     }

//     return arr
// }