import { Router } from "express";
import { controller } from "../controller/cv.controller";
const router = Router();

router.get("/",controller.getProfile)
router.get("/projects",controller.getProjects)
router.get("/projects/:id",controller.getProjectId)



export default router