import { Router } from "express";
import * as adviceCtrl from "../controllers/advice.controller";

const router = Router();

router.get("/api/:idUser/advice", adviceCtrl.getAllByUserId);
router.post("/api/advice", adviceCtrl.create);
router.get("/api/advice/:id",adviceCtrl.getById);
router.delete("/api/advice/:id",adviceCtrl.erase);
router.patch("/api/advice/:id",adviceCtrl.update);

export default router;