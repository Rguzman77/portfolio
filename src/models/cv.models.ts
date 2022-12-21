//IMPORTAR CONTENIDO BASE DE DATOS
import {Request, Response} from 'express'
import {content} from './database.json'

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

    addProject: (proyecto: any) => {
        content.portfolio.push(proyecto);
        return proyectos;
    }
}