"use client"

import { setQueryStringParameter } from "@/actions/setQueryStringParameter"

export default function NextBtn({ nextUrl }: { nextUrl: string }) {
    const cursor = nextUrl.split('=')[1]
    return (
        <div>
            <button
                onClick={() => setQueryStringParameter('cursor', cursor)}
                className="border-2 px-4 rounded-md hover:bg-zinc-600"
            >
                Next
            </button>
        </div>
    )
}