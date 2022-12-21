//IMPORTAR CONTENIDO BASE DE DATOS
import {Request, Response} from 'express'
import {content} from './database.json'
import {newProject, newProjectName} from "../controller/cv.controller"



export let proyectos = new Array<any>

export const model = {

    getAllData: () => {
        return content
    },
        
    getProjectsInfo: () => {
        return content.portfolio
    },
        
    getProjectById: (id:number) => {
        return content.portfolio[id]
    },

    addProject: (proyectToAdd:newProject) => {
        content.portfolio.push(proyectToAdd)
        return proyectos;
    },
    addProjectName: (proyectName:any) => {
        content.portfolio.push(proyectName)
        return proyectos;
    },
    deleteProject: (id:string)=>{
        content.portfolio.splice(content.portfolio.findIndex((e)=>e.name== id),1)
        return proyectos;
    }
}
