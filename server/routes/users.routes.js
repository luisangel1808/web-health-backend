const { Router } = require("express");
const userCtrl = require("../controllers/user.controller");
const { checkApiKey } = require('../middlewares/auth.handler');
const { checkRoles } = require('../middlewares/auth.handler')
const passport = require('passport');

const router = Router();
router.get("/api/user-data", /*checkApiKey,*/ passport.authenticate('jwt', {session: false}), userCtrl.getMyUserData);
router.get("/api/:idUser/user", /*checkApiKey,*/ passport.authenticate('jwt', {session: false}), userCtrl.getAllByUserId);
router.post("/api/user", userCtrl.create);
router.get("/api/user/:id", /*checkApiKey,*/ passport.authenticate('jwt', {session:false}), checkRoles('0'), userCtrl.getById);
router.delete("/api/user/:id",passport.authenticate('jwt', {session:false}), userCtrl.erase);
router.patch("/api/user/:id",passport.authenticate('jwt', {session:false}), userCtrl.update);
router.patch("/api/user/:id/add-task",passport.authenticate('jwt', {session:false}), userCtrl.addTask);
router.patch("/api/user/:edit-task",passport.authenticate('jwt', {session:false}), userCtrl.editTask);
router.patch("/api/user/:delete-task",passport.authenticate('jwt', {session:false}), userCtrl.deleteTask);

module.exports = router;