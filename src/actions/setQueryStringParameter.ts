
export function setQueryStringParameter(name: string, value?: string) {
    const param = new URLSearchParams(window.location.search)

    if (!value) {
        param.delete(name)
    }
    else {
        if (name !== 'cursor') {
            param.delete('cursor')
        }
        param.set(name, value)
    }

    if (!param.get('limit')) {
        param.set('limit', "10")
    }
    const url = new URL(`${window.location.origin}?${param.toString()}`)
    window.history.replaceState(null, "", url.toString());
    window.location.reload()
}