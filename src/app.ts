import express from 'express';
import bodyParser from 'body-parser';

import { errorHandler, notFoundHandler } from './middleware/errors.js';
import { __dirname, } from './utils/express.js';

const app = express();

app.set("port", process.env.PORT || 3200)
app.use(bodyParser.json())

//Routes
import index from './routes/index.js'
app.use("/", index)


export default app;

app.use(errorHandler)
app.use(notFoundHandler)