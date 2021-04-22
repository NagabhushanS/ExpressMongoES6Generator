export interface ExpressRequest {
    headers: {
        origin: null | string,
    },
}

export interface ExpressResponse {
    setHeader: (headerName: string, headerValue: any) => void;
}

export type Next = () => void;