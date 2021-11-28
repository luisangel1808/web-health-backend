const { Router } = require("express");
const  pressureCtrl = require("../controllers/pressure.controller");
const { checkApiKey } = require('../middlewares/auth.handler');
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');

const router = Router();
router.get("/api/:idUser/pressure",passport.authenticate('jwt', {session: false}),pressureCtrl.getAllByUserId);
router.post("/api/pressure",passport.authenticate('jwt', {session: false}),pressureCtrl.create);
router.get("/api/pressure/:id",passport.authenticate('jwt', {session: false}),pressureCtrl.getById);
router.delete("/api/pressure/:id",passport.authenticate('jwt', {session: false}),pressureCtrl.erase);
router.patch("/api/pressure/:id", passport.authenticate('jwt', {session: false}),pressureCtrl.update);
router.get("/api/pressure-personal/", passport.authenticate('jwt', {session: false}),pressureCtrl.getByMyId);

module.exports = router;