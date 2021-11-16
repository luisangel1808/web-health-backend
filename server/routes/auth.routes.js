import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
const passport = require('passport');

const router = Router();

router.post("/api/login", passport.authenticate('local', {session:false}), authCtrl.auth);
router.post("/api/recovery",authCtrl.recovery);
router.patch("/api/change-password",authCtrl.changePassword);

export default router;