import express, { Request, Response, NextFunction } from "express";

class App {
    public application : express.Application;

    constructor(){
        this.application = express();
    }
}

const app = new App().application;

app.get("/", (req:Request, res: Response) =>{
    res.send("Hello");
})

app.listen(3000, ()=>{
    console.log("Server Started")
})