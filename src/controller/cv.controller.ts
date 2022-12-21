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

    postProject: (req:Request, res:Response) => {
        const projectToAdd:newProject = req.body;
        model.addProject(projectToAdd);
        res.json('project added');
    },

    putProjectName: (req:Request, res:Response) => {
        const id = req.params.id.toString();
        const projectName = req.body;
        model.addProjectName(projectName, id);
        res.send('project modified');
    },

    deleteSelectedProyect: (req:Request,res:Response) => {
        const id= req.params.id.toString();
        model.deleteProject(id);
        res.send(`project ${id} deleted`);
    },
}



