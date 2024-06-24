
export interface Idocument {
    active: boolean;
    cik?: string;
    composite_figi: string;
    currency_name: usd;
    last_updated_utc: Date;
    locale: string;
    market: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices';
    name: string;
    primary_exchange: string;
    share_class_figi: string;
    ticker: string;
    type: string
}

export interface Iresponse {
    count: number;
    next_url?: string;
    request_id: string;
    results: Idocument[];
    status: 'OK'
}

export interface Ireject {
    status: 'ERROR';
    error: string;

}