import { dirname } from 'path';
import { fileURLToPath } from 'url';
import server from '../server.js';
import logger from './logging.js';
export const __dirname = dirname(fileURLToPath(import.meta.url));

export function onExpressError(error: NodeJS.ErrnoException) {
    if(error.syscall !== "listen"){
        throw error;
    }
    
    const port = process.env.PORT || 3000;
    switch(error.code){
        case "EADDRINUSE":
            logger.error(`${port} is already in use`)
            process.exit(1)
        case "EACCESS": 
            logger.error(`${port} requires elevated/administrator privileges`)
            process.exit(1)
        case "ERR_HTTP2_HEADERS_SENT":
            //TODO: find endpoint if possible
            logger.error("An endpoint attempted to send multiple HTTP/2 headers");
            break;
    }
}

export function onExpressListen(){
    const addr = server.address()
    const bindAddr = typeof addr == 'string' ? `pipe ${addr}` : addr?.port;
    logger.info(`Express listening on ${bindAddr}`) 
}
