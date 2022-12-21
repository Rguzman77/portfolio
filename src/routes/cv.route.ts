import { Router } from "express";
import { controller } from "../controller/cv.controller";

const router = Router();

router.get("/",controller.getProfile)

router.get("/projects",controller.getProjects)

router.get("/projects/:id",controller.getProjectId)

router.post("/projects/:id", controller.postProject)

router.put("/projects/:id", controller.putProjectName)

router.delete("/projects/:id", controller.deleteSelectedProyect)

export default router