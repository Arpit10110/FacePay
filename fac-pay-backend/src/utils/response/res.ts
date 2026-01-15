import type { Response } from "express";

export const message_success_res = (res:Response,message:string,status:number)=>{
    if(!message){
        message = "Success"
    }
    if(!status){
        status = 200
    }
    return res.status(status).json({
        success:true,
        message:message
    })
}

export const data_success_res = (res:Response,message:string,data:any,status:number)=>{
    if(!message){
        message = "Success"
    }
    if(!status){
        status = 200
    }
    return res.status(status).json({
        success:true,
        message:message,
        data:data
    })
}