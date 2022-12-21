import { Request, Response } from "express";
import { model } from "../models/cv.models";

export type newProject = {
        name:string;
        description: string;
        url:string;
        languages: never[];
        githubUrl: string;
        image:string;
      };
export type newProjectName = {
            name:string;
      };

export const controller = {

    getProfile: (req:Request,res:Response) => {
        res.json(model.getAllData());
    },

    getProjects: (req:Request,res:Response) => {
        res.json(model.getProjectsInfo());
    },

    getProjectId: (req:Request,res:Response) => {
        res.json(model.getProjectById(parseInt(req.params.id)))
    },
    deleteSelectedProyect: (req:Request,res:Response) => {
        const id= req.params.id.toString();
        model.deleteProject(id);
        res.send(`project ${id} deleted`);
    },

    postProject: (req:Request, res:Response) => {
        const proyectToAdd:newProject = req.body;
        model.addProject(proyectToAdd);
        res.json('project added');
    },

    postProjectName: (req:Request, res:Response) => {
        const proyectName = req.body;
        model.addProjectName(proyectName);
        res.json('project modified');
    }
}



