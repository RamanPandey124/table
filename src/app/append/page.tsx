"use client"


function setUrlParams(name: string, value: string) {
    const param = new URLSearchParams(window.location.search)
    if (!value) {
        param.delete(name)
    }
    else {
        param.set(name, value)
    }
    const url = new URL(`${window.location.origin}${window.location.pathname}?${param.toString()}`)
    window.history.pushState(null, "", url.toString());
}


export default function Page() {

    return (
        <div className="flex justify-center mt-8 space-x-2">
            <select className="bg-gray-800" onChange={(e) => setUrlParams('option', e.target.value)}>
                <option className="bg-gray-700"></option>
                <option className="bg-gray-700">first</option>
                <option className="bg-gray-700">third</option>
                <option className="bg-gray-700">second</option>
            </select>
            <select className="bg-gray-800" onChange={(e) => setUrlParams('number', e.target.value)}>
                <option className="bg-gray-700"></option>
                <option className="bg-gray-700">one</option>
                <option className="bg-gray-700">two</option>
                <option className="bg-gray-700">three</option>
            </select>
            <select className="bg-gray-800" onChange={(e) => setUrlParams('class', e.target.value)}>
                <option className="bg-gray-700"></option>
                <option className="bg-gray-700">122</option>
                <option className="bg-gray-700">12333333</option>
                <option className="bg-gray-700">09203</option>
            </select>
        </div>
    )
}