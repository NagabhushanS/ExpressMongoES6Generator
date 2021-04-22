import { ExpressRequest, ExpressResponse, Next } from "./types";

const allowOriginAndCredentials = (req: ExpressRequest, res: ExpressResponse, next: Next) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin == null ? '*' : req.headers.origin);
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

const allowOriginMethodHeadersAndCredentials = (req: ExpressRequest, res: ExpressResponse, next: Next) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin == null ? '*' : req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

export { allowOriginAndCredentials, allowOriginMethodHeadersAndCredentials };