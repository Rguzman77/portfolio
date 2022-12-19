import { Router } from "express";
import { cvCtrl } from "../controller/cv.controller";
const router = Router();

router.get("/",cvCtrl.getProfile)
//router.get("/",cvCtrl.getProfile)


export default router