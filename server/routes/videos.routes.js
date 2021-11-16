import { Router } from "express";
import * as videoCtrl from "../controllers/video.controller";
const { checkApiKey } = require('../middlewares/auth.handler');

const router = Router();

router.get("/api/:idUser/video", checkApiKey, videoCtrl.getAllByUserId);
router.post("/api/video", videoCtrl.create);
router.get("/api/video/:id",videoCtrl.getById);
router.delete("/api/video/:id",videoCtrl.erase);
router.patch("/api/video/:id",videoCtrl.update);

export default router;