//IMPORTAR CONTENIDO BASE DE DATOS
import {Request, Response} from 'express'
import {content} from './database.json'

export const personalData = {
    getAllData: ()=> {
        return content
    }
}
/*export const personalData = {
    getAllData: ()=> {
        return content
    }
}
*/