import { Request, Response } from "express";
import { model } from "../models/cv.models";

export const controller ={
    getProfile: (req:Request,res:Response)=>{
        res.json(model.getAllData());
    },
    getProjects: (req:Request,res:Response)=>{
        res.json(model.getProjectsInfo());
    },
    getProjectId: (req:Request,res:Response)=>{
        
        res.json(model.getProjectById(parseInt(req.params.id)))
    },
}



