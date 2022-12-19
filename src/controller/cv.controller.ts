import { Request, Response } from "express";
import { personalData, projectData, projectById, eraseProject} from "../models/cv.models";

export const cvCtrl={
    getProfile: (req:Request,res:Response)=>{
        res.json(personalData.getAllData());
    },
    getProjects: (req:Request,res:Response)=>{
        res.json(projectData.getProjectsInfo());
    },
    getProjectId: (req:Request,res:Response)=>{
        
        res.json(projectById.getProjectById(parseInt(req.params.id)))
    },
    deleteProjectById: (req:Request,res:Response)=>{
        
        res.json(eraseProject.deleteProjectById(parseInt(req.params.id)))}
}



