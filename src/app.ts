import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { errorHandler, notFoundHandler } from './middleware/errors.js';
import { __dirname, } from './utils/express.js';

export const app = express();

app.set("port", process.env.PORT || 3200)

app.use(bodyParser.json())
//For application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

//Frontend (React,Svelte,etc)
//app.use(express.static(path.join(__dirname, "../web/dist")))

// EJS,Pug,Jade 
//app.set("views", path.join(__dirname, "../web"))
//app.set("view engine", "engine")

app.use(express.static(path.join(__dirname, "../web/public")));

app.use(errorHandler)
app.use(notFoundHandler)


//Routes
import index from './routes/index.js'
app.use("/", index)

