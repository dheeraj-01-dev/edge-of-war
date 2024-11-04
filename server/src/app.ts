import { config } from 'dotenv';
import express, { NextFunction, Request, Response } from 'express'

config();
import cors from 'cors'
import battleRouter from './battles/battles.router.js';
import { userRouter } from './users/user.router.js';
import notificatonRouter from './notification/notification.routes.js';

const app = express();
app.use(cors())

app.use(express.json({
  limit: 5000000
}), (error:any, req:Request, res:Response, next:NextFunction)=>{
  if (error) {
    return res.status(400).json({ 
      success: false,
      error
    });
  }
  next();
});

app.use("/battle", battleRouter)
app.use("/user", userRouter)
app.use("/notification", notificatonRouter)

app.all('*', (req, res)=>{
  res.status(404).json({
    success: false,
    error: "route not found!"
  })
});

app.use((err:any, req:any, res:any, next:any)=>{
  if(err){
    return res.status(500).json({
      success: false,
      error: "internal server error!"
    })
  }
});



export default app;