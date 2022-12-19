import { Request, Response } from "express";
import { personalData } from "../models/cv.models";

export const cvCtrl={
    getProfile: (req:Request,res:Response)=>{
        res.json(personalData.getAllData());
    }
}
/*
export const cvCtrl={
    getProfile: (req:Request,res:Response)=>{
        res.json(personalData.getAllData());
    }
}*/