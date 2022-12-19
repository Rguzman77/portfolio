//IMPORTAR CONTENIDO BASE DE DATOS
import {Request, Response} from 'express'
import {content} from './database.json'

export const personalData = {
    getAllData: ()=> {
        return content
    }
}
export const projectData = {
    getProjectsInfo: ()=> {
        return content.portfolio
    }
}


export const projectById = {
    getProjectById: (id:number)=> {
        return content.portfolio[id]
    }
}

