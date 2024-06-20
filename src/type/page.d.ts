
export interface Idocument {
    ticker: string,
    name: string,
    market: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices',
    locale: string,
    primary_exchange: string,
    type: string,
    active: boolean,
    currency_name: string,
    cik: number | string,
    composite_figi: string,
    share_class_figi: string,
    last_updated_utc: Date;
}