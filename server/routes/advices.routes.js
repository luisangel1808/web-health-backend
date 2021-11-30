const { Router } = require("express");
const adviceCtrl = require("../controllers/advice.controller");
const { checkApiKey } = require('../middlewares/auth.handler');
const { checkRoles } = require('../middlewares/auth.handler')
const passport = require('passport');

const router = Router();

router.get("/api/:idUser/advice", passport.authenticate('jwt', {session:false}), adviceCtrl.getAllByUserId);
router.post("/api/advice", passport.authenticate('jwt', {session:false}), adviceCtrl.create);
router.get("/api/advice/:id", passport.authenticate('jwt', {session:false}), adviceCtrl.getById);
router.delete("/api/advice/:id", passport.authenticate('jwt', {session:false}), adviceCtrl.erase);
router.patch("/api/advice/:id",passport.authenticate('jwt', {session:false}), adviceCtrl.update);

module.exports = router;