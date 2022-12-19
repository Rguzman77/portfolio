import { Router } from "express";
import { cvCtrl } from "../controller/cv.controller";
const router = Router();

router.get("/",cvCtrl.getProfile)
router.get("/projects",cvCtrl.getProjects)
router.get("/projects/:id",cvCtrl.getProjectId)


export default router