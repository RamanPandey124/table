
export interface State {
    ticker?: string,
    market?: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices',
    type?: string,
    order?: 'asc' | 'desc';
    limit?: number;
}

export type Action = {}
// | { type: 'PATH', payload: resourceDocument }
