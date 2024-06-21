export interface State {
    search?: string;
    market?: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices';
    // sort?: 'ticker' | 'name' | 'market' | 'cik';
    order?: 'asc' | 'desc';
    cursor?: string
    limit: number;
}

export interface Ipayload {
    name: string,
    value?: string
}

export type Action
    = { type: 'QUERY', payload: Ipayload }
    | { type: 'NEXT', payload: string | undefined }
