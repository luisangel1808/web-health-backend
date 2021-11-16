import { Router } from "express";
import * as pressureCtrl from "../controllers/pressure.controller";

const router = Router();

router.get("/api/:idUser/pressure", pressureCtrl.getAllByUserId);
router.post("/api/pressure", pressureCtrl.create);
router.get("/api/pressure/:id",pressureCtrl.getById);
router.delete("/api/pressure/:id",pressureCtrl.erase);
router.patch("/api/pressure/:id",pressureCtrl.update);

export default router;