import express from "express";
import db from "./fakeDB/db.js";


const app = express();

app.get("/api/v1/parks", (request, response)=> {
    response.status(200).send({
        success: "true",
        message: "Parks successfully retrieved",
        randomFact: "Wu tang",
        parks: db
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log("service started")
});