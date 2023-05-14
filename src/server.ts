import { app } from "./app.js";
import { onExpressError, onExpressListen } from "./utils/express.js";

const server = app.listen(app.get("port"), onExpressListen)
server.on("error", onExpressError)

export default server;
