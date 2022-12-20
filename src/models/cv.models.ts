//IMPORTAR CONTENIDO BASE DE DATOS
import {Request, Response} from 'express'
import {content} from './database.json'


export const model ={
       
    getAllData: ()=> {
                return content
            },
          
    getProjectsInfo: ()=> {
                return content.portfolio
            },
        
    getProjectById: (id:number)=> {
                return content.portfolio[id]
            
     }
}