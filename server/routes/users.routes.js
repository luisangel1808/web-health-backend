import { Router } from "express";
import * as userCtrl from "../controllers/user.controller";
const { checkApiKey } = require('../middlewares/auth.handler');
const { checkRoles } = require('../middlewares/auth.handler')
const passport = require('passport');

const router = Router();
router.get("/api/user-data", checkApiKey, passport.authenticate('jwt', {session: false}), userCtrl.getMyUserData);
router.get("/api/:idUser/user", checkApiKey, passport.authenticate('jwt', {session: false}), userCtrl.getAllByUserId);
router.post("/api/user", userCtrl.create);
router.get("/api/user/:id", checkApiKey, passport.authenticate('jwt', {session:false}), checkRoles('0'), userCtrl.getById);
router.delete("/api/user/:id",userCtrl.erase);
router.patch("/api/user/:id",userCtrl.update);
router.patch("/api/user/:id/add-task",userCtrl.addTask);
router.patch("/api/user/:edit-task",userCtrl.editTask);
router.patch("/api/user/:delete-task",userCtrl.deleteTask);

export default router;