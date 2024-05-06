import express from "express";
import Connection from "./database/db.js";

import cors from "cors";
import routes from "./routes/route.js";
import path from 'path';

const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true}));
app.use("/", routes);

app.use(express.static(path.join(__dirname, "./cleint/build")));

app.get('*', function(_, res){
    res.sendFile(path.join(__dirname, "./cleint/build/index.html"), function(err){
        res.status(500).send(err);
    })
})

const PORT = process.env.PORT || 8000;
// app.use(cors());
// app.use('/', rt);

Connection();

app.listen(PORT, () => console.log(`Server is started on PORT ${PORT}`));
